import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const IMAGES_DIR = path.resolve(process.cwd(), 'public/images');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return files.flat();
}

async function optimizeImages() {
  console.log('🔍 Scanning images in', IMAGES_DIR);
  const files = await getFiles(IMAGES_DIR);
  const imageFiles = files.filter((f) => /\.(jpg|jpeg|png)$/i.test(f));

  console.log(`Found ${imageFiles.length} images to optimize.\n`);

  let totalOldSize = 0;
  let totalNewSize = 0;

  for (const filePath of imageFiles) {
    const relPath = path.relative(process.cwd(), filePath);
    const stat = await fs.promises.stat(filePath);
    const oldSize = stat.size;
    totalOldSize += oldSize;

    const ext = path.extname(filePath).toLowerCase();
    const tempPath = filePath + '.tmp';

    try {
      const image = sharp(filePath);
      const metadata = await image.metadata();

      let pipeline = image.rotate(); // preserve auto-rotation based on EXIF then strip

      // Max dimensions based on type
      let maxDim = 1200;
      if (relPath.includes('clinic')) {
        maxDim = 1600; // Keep high resolution for clinic & hero
      }

      if ((metadata.width && metadata.width > maxDim) || (metadata.height && metadata.height > maxDim)) {
        pipeline = pipeline.resize({
          width: metadata.width > metadata.height ? maxDim : undefined,
          height: metadata.height >= metadata.width ? maxDim : undefined,
          fit: 'inside',
          withoutEnlargement: true,
        });
      }

      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true,
        });
      } else if (ext === '.png') {
        pipeline = pipeline.png({
          quality: 85,
          compressionLevel: 9,
          palette: true,
        });
      }

      await pipeline.toFile(tempPath);
      const newStat = await fs.promises.stat(tempPath);
      const newSize = newStat.size;

      // If optimized version is smaller, replace
      if (newSize < oldSize) {
        await fs.promises.unlink(filePath);
        await fs.promises.rename(tempPath, filePath);
        totalNewSize += newSize;
        const reduction = (((oldSize - newSize) / oldSize) * 100).toFixed(1);
        console.log(`✅ [${reduction}% menor] ${relPath}: ${(oldSize / 1024).toFixed(1)}KB ➔ ${(newSize / 1024).toFixed(1)}KB`);
      } else {
        await fs.promises.unlink(tempPath);
        totalNewSize += oldSize;
        console.log(`⏩ [Já otimizada] ${relPath}: ${(oldSize / 1024).toFixed(1)}KB`);
      }
    } catch (err) {
      if (fs.existsSync(tempPath)) {
        await fs.promises.unlink(tempPath);
      }
      console.error(`❌ Erro ao processar ${relPath}:`, err.message);
      totalNewSize += oldSize;
    }
  }

  const savedTotal = (((totalOldSize - totalNewSize) / totalOldSize) * 100).toFixed(1);
  console.log('\n=======================================');
  console.log(`🎉 OTIMIZAÇÃO CONCLUÍDA COM SUCESSO!`);
  console.log(`Tamanho Total Antes: ${(totalOldSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Tamanho Total Depois: ${(totalNewSize / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Economia Total de Dados: ${savedTotal}%`);
  console.log('=======================================\n');
}

optimizeImages();
