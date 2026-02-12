#!/bin/bash
# Start both services with PM2

# Install PM2 if not present
npm install -g pm2

# Start backend
cd backend
pm2 start dist/main.js --name backend

# Start frontend
cd ../frontend-next
pm2 start npm --name frontend -- start

# Show status
pm2 list

echo "✅ Both apps running!"
