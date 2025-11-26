#!/data/data/com.termux/files/usr/bin/bash

# Navigate to project root
cd ~/pressworks_clean || exit

echo "🔧 Fixing CSS comment warnings..."
# Convert all // comments to /* ... */ in CSS files
find src -type f -name "*.css" -exec sed -i 's|//\(.*\)|/*\1 */|' {} \;
# Remove stray '*/' at end of lines
find src -type f -name "*.css" -exec sed -i 's|\s*\*/\s*$||' {} \;

echo "📦 Installing dependencies..."
npm install

echo "🏗 Building Vite app..."
npm run build

echo "🌐 Previewing on port 5173..."
npx vite preview --port 5173 &

echo "💾 Adding changes to Git..."
git add .
git commit -m "Fix CSS comments, build app, preview on 5173"
git push origin main

echo "✅ All done! App preview: http://localhost:5173/"
