import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function optimizeAll() {
  console.log('🚀 Starting High-Fidelity Asset Optimization...\n');

  // 1. Optimize cta-bg.jpg -> cta-bg.webp
  const ctaJpg = 'public/images/cta-bg.jpg';
  const ctaWebp = 'public/images/cta-bg.webp';
  if (fs.existsSync(ctaJpg)) {
    const buf = fs.readFileSync(ctaJpg);
    await sharp(buf)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(ctaWebp);
    console.log(`✅ cta-bg.webp created`);
  }

  // 2. Optimize services-bg.jpg -> services-bg.webp
  const srvJpg = 'public/images/services-bg.jpg';
  const srvWebp = 'public/images/services-bg.webp';
  if (fs.existsSync(srvJpg)) {
    const buf = fs.readFileSync(srvJpg);
    await sharp(buf)
      .resize({ width: 1600, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toFile(srvWebp);
    console.log(`✅ services-bg.webp created`);
  }

  // 3. Optimize hero posters
  const heroMob = 'public/images/hero_poster_mobile.webp';
  if (fs.existsSync(heroMob)) {
    const buf = fs.readFileSync(heroMob);
    const optimizedBuf = await sharp(buf)
      .resize({ width: 900, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroMob, optimizedBuf);
  }

  const heroDesk = 'public/images/hero_poster_desktop.webp';
  if (fs.existsSync(heroDesk)) {
    const buf = fs.readFileSync(heroDesk);
    const optimizedBuf = await sharp(buf)
      .resize({ width: 1920, withoutEnlargement: true })
      .webp({ quality: 85, effort: 6 })
      .toBuffer();
    fs.writeFileSync(heroDesk, optimizedBuf);
  }

  // 4. Optimize logo with dark blue and transparency
  const svgPath = 'public/images/logo/igo-logo.svg';
  if (fs.existsSync(svgPath)) {
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    const matches = svgContent.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/g);
    if (matches && matches.length >= 2) {
      const maskB64 = matches[0].replace('data:image/png;base64,', '');
      const colorB64 = matches[1].replace('data:image/png;base64,', '');
      const maskBuf = Buffer.from(maskB64, 'base64');
      const colorBuf = Buffer.from(colorB64, 'base64');
      const maskGray = await sharp(maskBuf).toColourspace('b-w').raw().toBuffer();
      const { data: colorData, info: colorInfo } = await sharp(colorBuf).raw().toBuffer({ resolveWithObject: true });
      const totalPixels = colorInfo.width * colorInfo.height;
      const rgbaBuffer = Buffer.alloc(totalPixels * 4);
      for (let i = 0; i < totalPixels; i++) {
        rgbaBuffer[i * 4 + 0] = colorData[i * 3 + 0];
        rgbaBuffer[i * 4 + 1] = colorData[i * 3 + 1];
        rgbaBuffer[i * 4 + 2] = colorData[i * 3 + 2];
        rgbaBuffer[i * 4 + 3] = maskGray[i];
      }
      const finalLogo = sharp(rgbaBuffer, {
        raw: { width: colorInfo.width, height: colorInfo.height, channels: 4 }
      }).trim();
      await finalLogo.clone().resize({ width: 600, withoutEnlargement: true }).png({ quality: 95 }).toFile('public/images/logo/igo-logo.png');
      await finalLogo.clone().resize({ width: 600, withoutEnlargement: true }).webp({ quality: 95 }).toFile('public/images/logo/igo-logo.webp');
    }
  }

  // 5. Generate Ultra-Crisp High-Res (1200px) WebP for Treatments with subtle sharpening
  const optimizeTreatments = async (dir) => {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        await optimizeTreatments(full);
      } else if (/\.jpg$/i.test(file)) {
        const ext = path.extname(full);
        const webpPath = full.slice(0, -ext.length) + '.webp';
        const buf = fs.readFileSync(full);
        await sharp(buf)
          .resize({ width: 1200, withoutEnlargement: true })
          .sharpen({ sigma: 0.8, m1: 1.0, m2: 2.0 })
          .webp({ quality: 90, effort: 6, smartSubsample: true })
          .toFile(webpPath);
        console.log(`✅ Crisp 1200px WebP: ${file} -> ${(fs.statSync(webpPath).size / 1024).toFixed(1)} KB`);
      }
    }
  };

  await optimizeTreatments('public/images/treatments');

  console.log('\n✨ High-Fidelity Optimization Completed!');
}

optimizeAll();
