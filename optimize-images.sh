#!/bin/bash

# Script to optimize images for web
# Requires: imagemagick, jpegoptim, optipng

echo "🖼️  Starting image optimization..."

# Create optimized directory
mkdir -p assets/optimized

# Optimize JPG/JPEG files
echo "📸 Optimizing JPG files..."
find assets -name "*.jpg" -o -name "*.jpeg" | while read img; do
    filename=$(basename "$img")
    # Resize to max width 1920px, compress to 85% quality
    convert "$img" -resize '1920>' -quality 85 -strip "assets/optimized/$filename"
    # Further optimize with jpegoptim
    jpegoptim --max=85 --strip-all "assets/optimized/$filename"
done

# Optimize PNG files
echo "🎨 Optimizing PNG files..."
find assets -name "*.png" | while read img; do
    filename=$(basename "$img")
    # Copy and optimize with optipng
    cp "$img" "assets/optimized/$filename"
    optipng -o2 "assets/optimized/$filename"
done

echo "✅ Optimization complete! Check assets/optimized/"
echo "💡 Tip: Original sizes vs Optimized:"
du -sh assets/
du -sh assets/optimized/ 