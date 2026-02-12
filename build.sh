#!/bin/bash
# Hostinger deployment script - Builds both frontend and backend

echo "🚀 Building Backend..."
cd backend
npm install --production
npm run build
cd ..

echo "🎨 Building Frontend..."
cd frontend-next
npm install --production
npm run build
cd ..

echo "✅ Build complete!"
