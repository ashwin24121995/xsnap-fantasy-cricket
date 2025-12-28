#!/usr/bin/env node
import sharp from 'sharp';
import { readdir, unlink } from 'fs/promises';
import { join, parse, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const publicDir = join(__dirname, '../client/public');

// Image files to convert
const imageExtensions = ['.png', '.jpg', '.jpeg'];

async function findImages(dir) {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (imageExtensions.includes(parse(entry.name).ext.toLowerCase())) {
      files.push(fullPath);
    }
  }
  
  return files;
}

async function convertToWebP(imagePath) {
  const parsed = parse(imagePath);
  const webpPath = join(parsed.dir, `${parsed.name}.webp`);
  
  try {
    console.log(`Converting: ${imagePath}`);
    
    await sharp(imagePath)
      .webp({ quality: 85, effort: 6 })
      .toFile(webpPath);
    
    console.log(`✓ Created: ${webpPath}`);
    
    // Delete original file
    await unlink(imagePath);
    console.log(`✓ Deleted: ${imagePath}`);
    
    return { original: imagePath, webp: webpPath };
  } catch (error) {
    console.error(`✗ Error converting ${imagePath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🔍 Finding images...\n');
  const images = await findImages(publicDir);
  
  console.log(`Found ${images.length} images to convert\n`);
  
  const results = [];
  for (const image of images) {
    const result = await convertToWebP(image);
    if (result) {
      results.push(result);
    }
  }
  
  console.log(`\n✅ Converted ${results.length} images to WebP format`);
  console.log('\n📝 Image mappings:');
  results.forEach(({ original, webp }) => {
    const origName = parse(original).base;
    const webpName = parse(webp).base;
    console.log(`  ${origName} → ${webpName}`);
  });
}

main().catch(console.error);
