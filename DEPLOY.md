# Deployment Guide for Banahosting (cPanel)

## Prerequisites
- **Node.js**: Ensure "Setup Node.js App" is available in cPanel. Select Node.js 18 or 20.
- **Database**: Create a MySQL database and user in cPanel.

## Backend Deployment
1. **Build**: Run `npm run build` in `backend` (or just upload source and build there).
2. **Upload**: Zip the contents of `backend` (excluding `node_modules`).
3. **cPanel**:
   - Go to "Setup Node.js App".
   - Create Application.
   - Application Root: `backend`.
   - Application URL: `api.josegaspard.dev` (subdomain).
   - Startup File: `dist/main.js` (you need to build first).
   - Run `npm install` inside the Node App interface.
4. **Env**: Set environment variables (DB_HOST, DB_USER, etc.) in the Node App interface.

## Frontend Deployment (SSR)
1. **Build**: Run `npm run build` in `frontend`.
   - Output: `dist/frontend/server` and `dist/frontend/browser`.
2. **Upload**:
   - Create another Node.js App for the main domain `josegaspard.dev`.
   - Upload the contents of `dist/frontend`.
   - Startup File: `server/server.mjs`.
3. **Static Assets**: Ensure `browser` folder is served as static.

*Note: For simpler deployment, you can set `outputMode: static` in angular.json to deploy just the `browser` folder content to `public_html`, but you lose SSR features.*
