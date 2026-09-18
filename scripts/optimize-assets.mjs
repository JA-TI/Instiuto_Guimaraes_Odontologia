import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeAll() {
  console.log('🚀 Starting Full Assets Optimization...\n');

  // 1. Optimize cta-bg.jpg -> cta-bg.webp
  const ctaJpg = 'public/images/cta-bg.jpg';
  const ctaWebp = 'public/images/cta-bg.webp';
  if (fs.existsSync(ctaJpg)) {
    const origSize = fs.statSync(ctaJpg).size;
    const buf = fs.readFileSync(ctaJpg);
    await sharp(buf)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(ctaWebp);
    const newSize = fs.statSync(ctaWebp).size;
    console.log(`✅ cta-bg.webp: ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  // 2. Optimize services-bg.jpg -> services-bg.webp
  const srvJpg = 'public/images/services-bg.jpg';
  const srvWebp = 'public/images/services-bg.webp';
  if (fs.existsSync(srvJpg)) {
    const origSize = fs.statSync(srvJpg).size;
    const buf = fs.readFileSync(srvJpg);
    await sharp(buf)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 80, effort: 6 })
      .toFile(srvWebp);
    const newSize = fs.statSync(srvWebp).size;
    console.log(`✅ services-bg.webp: ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  // 3. Optimize hero_poster_mobile.webp
  const heroMob = 'public/images/hero_poster_mobile.webp';
  if (fs.existsSync(heroMob)) {
    const origSize = fs.statSync(heroMob).size;
    const buf = fs.readFileSync(heroMob);
    const optimizedBuf = await sharp(buf)
      .resize({ width: 720, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroMob, optimizedBuf);
    const newSize = fs.statSync(heroMob).size;
    console.log(`✅ hero_poster_mobile.webp: ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  // 4. Optimize hero_poster_desktop.webp
  const heroDesk = 'public/images/hero_poster_desktop.webp';
  if (fs.existsSync(heroDesk)) {
    const origSize = fs.statSync(heroDesk).size;
    const buf = fs.readFileSync(heroDesk);
    const optimizedBuf = await sharp(buf)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 75, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroDesk, optimizedBuf);
    const newSize = fs.statSync(heroDesk).size;
    console.log(`✅ hero_poster_desktop.webp: ${(origSize / 1024).toFixed(1)} KB -> ${(newSize / 1024).toFixed(1)} KB`);
  }

  // 5. Optimize logo SVG / WebP with authentic dark blue color & transparency
  const svgPath = 'public/images/logo/igo-logo.svg';
  if (fs.existsSync(svgPath)) {
    const origSize = fs.statSync(svgPath).size;
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const matches = svgContent.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g);
    if (matches && matches.length >= 2) {
      const maskB64 = matches[0].replace('data:image/png;base64,', '');
      const colorB64 = matches[1].replace('data:image/png;base64,', '');

      const maskBuf = Buffer.from(maskB64, 'base64');
      const colorBuf = Buffer.from(colorB64, 'base64');

      const maskGray = await sharp(maskBuf).toColourspace('b-w').raw().toBuffer();
      const { data: colorData, info: colorInfo } = await sharp(colorBuf)
        .raw()
        .toBuffer({ resolveWithObject: true });

      const totalPixels = colorInfo.width * colorInfo.height;
      const rgbaBuffer = Buffer.alloc(totalPixels * 4);

      for (let i = 0; i < totalPixels; i++) {
        rgbaBuffer[i * 4 + 0] = colorData[i * 3 + 0];
        rgbaBuffer[i * 4 + 1] = colorData[i * 3 + 1];
        rgbaBuffer[i * 4 + 2] = colorData[i * 3 + 2];
        rgbaBuffer[i * 4 + 3] = maskGray[i];
      }

      const finalLogo = sharp(rgbaBuffer, {
        raw: {
          width: colorInfo.width,
          height: colorInfo.height,
          channels: 4,
        },
      }).trim();

      const logoPng = 'public/images/logo/igo-logo.png';
      const logoWebp = 'public/images/logo/igo-logo.webp';

      await finalLogo
        .clone()
        .resize({ width: 600, withoutEnlargement: true })
        .png({ quality: 95, compressionLevel: 9 })
        .toFile(logoPng);

      await finalLogo
        .clone()
        .resize({ width: 600, withoutEnlargement: true })
        .webp({ quality: 90, effort: 6 })
        .toFile(logoWebp);

      console.log(`✅ Dark Blue Logo created: ${(origSize / 1024).toFixed(1)} KB -> ${(fs.statSync(logoWebp).size / 1024).toFixed(1)} KB (webp) / ${(fs.statSync(logoPng).size / 1024).toFixed(1)} KB (png)`);
    }
  }

  // 6. Optimize images in directories
  const optimizeDir = async (dir, maxDim = 800) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        await optimizeDir(full, maxDim);
      } else if (/\.(jpg|jpeg|png|webp)$/i.test(file)) {
        const origSize = fs.statSync(full).size;
        try {
          const buf = fs.readFileSync(full);
          let pipeline = sharp(buf).rotate();
          const meta = await pipeline.metadata();
          if ((meta.width && meta.width > maxDim) || (meta.height && meta.height > maxDim)) {
            pipeline = pipeline.resize({
              width: meta.width > meta.height ? maxDim : undefined,
              height: meta.height >= meta.width ? maxDim : undefined,
              fit: 'inside',
              withoutEnlargement: true
            });
          }
          let outBuf;
          if (/\.webp$/i.test(file)) {
            outBuf = await pipeline.webp({ quality: 78, effort: 6 }).toBuffer();
          } else if (/\.png$/i.test(file)) {
            outBuf = await pipeline.png({ quality: 80, compressionLevel: 9, palette: true }).toBuffer();
          } else {
            outBuf = await pipeline.jpeg({ quality: 78, mozjpeg: true, progressive: true }).toBuffer();
          }
          if (outBuf.length < origSize) {
            fs.writeFileSync(full, outBuf);
            console.log(`✅ ${file}: ${(origSize / 1024).toFixed(1)} KB -> ${(outBuf.length / 1024).toFixed(1)} KB`);
          }
        } catch (e) {
          console.error(`Error processing ${file}:`, e.message);
        }
      }
    }
  };

  await optimizeDir('public/images/doctors', 600);
  await optimizeDir('public/images/clinic', 1200);
  await optimizeDir('public/images/treatments', 700);

  console.log('\n✨ Asset optimization completed successfully!');
}

optimizeAll();
