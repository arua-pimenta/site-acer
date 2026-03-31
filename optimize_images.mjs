import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const ASSETS_DIR = path.resolve(process.cwd(), 'assets');

async function processImages() {
  console.log('Starting image optimization...');
  let savedKB = 0;

  async function processDirectory(dirPath) {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        await processDirectory(fullPath);
      } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
        const statsBefore = await fs.stat(fullPath);
        
        // Define WebP output path
        const ext = path.extname(entry.name);
        // We'll replace the file directly or generate a WebP
        const webpPath = fullPath.replace(ext, '.webp');

        try {
          if (ext.toLowerCase() === '.png' && entry.name.includes('logo')) {
            // Logos usually need transparency and shouldn't be shrunk too hard
            await sharp(fullPath)
              .resize({ width: 800, withoutEnlargement: true }) // reasonable max size
              .webp({ quality: 80, effort: 6 })
              .toFile(webpPath);
          } else {
            // General photos
            await sharp(fullPath)
              .resize({ width: 1920, withoutEnlargement: true }) // Max 1080p width
              .webp({ quality: 75, effort: 6 })
              .toFile(webpPath);
          }

          const statsAfter = await fs.stat(webpPath);
          const saved = statsBefore.size - statsAfter.size;
          savedKB += saved;
          
          console.log(`✅ Optimized: ${entry.name}`);
          console.log(`   - Size: ${(statsBefore.size / 1024 / 1024).toFixed(2)} MB -> ${(statsAfter.size / 1024 / 1024).toFixed(2)} MB`);
          
          // Delete old original file
          await fs.unlink(fullPath);

        } catch (error) {
          console.error(`❌ Error processing ${entry.name}:`, error);
        }
      }
    }
  }

  await processDirectory(ASSETS_DIR);
  console.log(`\n🎉 Optimization complete! Saved ${(savedKB / 1024 / 1024).toFixed(2)} MB in total.`);
}

processImages();
