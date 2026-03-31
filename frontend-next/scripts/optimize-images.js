#!/usr/bin/env node
/**
 * Image Optimization Script for josegaspard.dev
 * Converts images to WebP, generates responsive sizes, and compresses originals.
 * Run: node scripts/optimize-images.js
 * Integrated into build via: npm run optimize-images
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const IMG_DIR = path.join(__dirname, '..', 'public', 'img');
const PORTFOLIO_DIR = path.join(IMG_DIR, 'portfolio');

// Responsive sizes for different contexts
const SIZES = {
  hero: [1200, 800, 600],      // Hero images
  thumbnail: [600, 400],        // Portfolio cards
  profile: [400, 200],          // Profile/logos
};

// Quality settings
const WEBP_QUALITY = 80;
const JPEG_QUALITY = 82;
const PNG_COMPRESSION = 9;

async function getImageFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getImageFiles(fullPath));
    } else if (/\.(png|jpg|jpeg|webp)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function optimizeImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const baseName = path.basename(filePath, ext);
  const dir = path.dirname(filePath);
  const isPortfolio = filePath.includes('portfolio');
  const sizes = isPortfolio ? SIZES.hero : SIZES.profile;

  const stats = fs.statSync(filePath);
  const originalSize = stats.size;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // 1. Generate WebP version (same size)
    const webpPath = path.join(dir, `${baseName}.webp`);
    if (ext !== '.webp') {
      await sharp(filePath)
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(webpPath);
      const webpStats = fs.statSync(webpPath);
      const savings = ((1 - webpStats.size / originalSize) * 100).toFixed(1);
      console.log(`  ✓ WebP: ${baseName}.webp (${formatBytes(webpStats.size)}, -${savings}%)`);
    } else {
      // Re-compress existing WebP
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .webp({ quality: WEBP_QUALITY, effort: 6 })
        .toFile(tempPath);
      const newStats = fs.statSync(tempPath);
      if (newStats.size < originalSize) {
        fs.renameSync(tempPath, filePath);
        const savings = ((1 - newStats.size / originalSize) * 100).toFixed(1);
        console.log(`  ✓ Re-compressed: ${baseName}.webp (${formatBytes(newStats.size)}, -${savings}%)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`  ○ Already optimal: ${baseName}.webp`);
      }
    }

    // 2. Generate responsive sizes (only WebP)
    for (const width of sizes) {
      if (metadata.width && metadata.width > width) {
        const resizedPath = path.join(dir, `${baseName}-${width}w.webp`);
        if (!fs.existsSync(resizedPath)) {
          await sharp(filePath)
            .resize(width, null, { withoutEnlargement: true })
            .webp({ quality: WEBP_QUALITY, effort: 6 })
            .toFile(resizedPath);
          const resizedStats = fs.statSync(resizedPath);
          console.log(`  ✓ Responsive: ${baseName}-${width}w.webp (${formatBytes(resizedStats.size)})`);
        }
      }
    }

    // 3. Compress original if PNG/JPEG (in-place)
    if (ext === '.png') {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .png({ compressionLevel: PNG_COMPRESSION, adaptiveFiltering: true })
        .toFile(tempPath);
      const newStats = fs.statSync(tempPath);
      if (newStats.size < originalSize) {
        fs.renameSync(tempPath, filePath);
        const savings = ((1 - newStats.size / originalSize) * 100).toFixed(1);
        console.log(`  ✓ Compressed PNG: ${baseName}.png (${formatBytes(newStats.size)}, -${savings}%)`);
      } else {
        fs.unlinkSync(tempPath);
      }
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const tempPath = filePath + '.tmp';
      await sharp(filePath)
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toFile(tempPath);
      const newStats = fs.statSync(tempPath);
      if (newStats.size < originalSize) {
        fs.renameSync(tempPath, filePath);
        const savings = ((1 - newStats.size / originalSize) * 100).toFixed(1);
        console.log(`  ✓ Compressed JPEG: ${baseName}${ext} (${formatBytes(newStats.size)}, -${savings}%)`);
      } else {
        fs.unlinkSync(tempPath);
      }
    }
  } catch (err) {
    console.error(`  ✗ Error processing ${baseName}${ext}: ${err.message}`);
  }
}

function formatBytes(bytes) {
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function main() {
  console.log('\n🖼️  Image Optimization Script for josegaspard.dev');
  console.log('='.repeat(50));

  const files = await getImageFiles(IMG_DIR);
  console.log(`\nFound ${files.length} images to process.\n`);

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const file of files) {
    const relPath = path.relative(IMG_DIR, file);
    const originalSize = fs.statSync(file).size;
    totalOriginal += originalSize;
    console.log(`\n📁 ${relPath} (${formatBytes(originalSize)})`);
    await optimizeImage(file);
  }

  // Calculate total savings
  const allFiles = await getImageFiles(IMG_DIR);
  for (const file of allFiles) {
    totalOptimized += fs.statSync(file).size;
  }

  console.log('\n' + '='.repeat(50));
  console.log(`✅ Done! Processed ${files.length} original images.`);
  console.log(`   Total files now: ${allFiles.length}`);
  console.log(`   Original total: ${formatBytes(totalOriginal)}`);
  console.log(`   Optimized total: ${formatBytes(totalOptimized)}`);
  console.log('');
}

main().catch(console.error);
