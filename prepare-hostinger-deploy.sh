#!/bin/bash

###############################################################################
# Script de Preparación para Deployment en Hostinger Business
# Uso: ./prepare-hostinger-deploy.sh
###############################################################################

set -e

# Colores
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${GREEN}🚀 Preparando deployment para Hostinger Business...${NC}\n"

# Crear directorio de deployment
DEPLOY_DIR="hostinger-deploy"
rm -rf $DEPLOY_DIR
mkdir -p $DEPLOY_DIR/frontend $DEPLOY_DIR/backend

# 1. Build Frontend
echo -e "${YELLOW}📦 Building frontend...${NC}"
cd frontend-next
npm install
npm run build
cd ..

# 2. Build Backend
echo -e "${YELLOW}📦 Building backend...${NC}"
cd backend
npm install
npm run build
cd ..

# 3. Copiar archivos necesarios del frontend
echo -e "${BLUE}📁 Copiando archivos del frontend...${NC}"
cp -r frontend-next/.next $DEPLOY_DIR/frontend/
cp -r frontend-next/public $DEPLOY_DIR/frontend/
cp frontend-next/package.json $DEPLOY_DIR/frontend/
cp frontend-next/package-lock.json $DEPLOY_DIR/frontend/
cp frontend-next/next.config.mjs $DEPLOY_DIR/frontend/
cp frontend-next/.env.production.example $DEPLOY_DIR/frontend/.env.production

# 4. Copiar archivos necesarios del backend
echo -e "${BLUE}📁 Copiando archivos del backend...${NC}"
cp -r backend/dist $DEPLOY_DIR/backend/
cp backend/package.json $DEPLOY_DIR/backend/
cp backend/package-lock.json $DEPLOY_DIR/backend/
cp backend/.env.production.example $DEPLOY_DIR/backend/.env
cp backend/database.sqlite $DEPLOY_DIR/backend/ 2>/dev/null || echo "No database file found, skipping..."

# 5. Crear archivo README con instrucciones
cat > $DEPLOY_DIR/README.md << 'EOF'
# Archivos para Deployment en Hostinger Business

## Frontend (Next.js)

### Archivos a subir a Hostinger:
- `.next/` - Build de producción
- `public/` - Assets estáticos
- `package.json` y `package-lock.json`
- `next.config.mjs`
- `.env.production` (edita con tus valores reales)

### Configuración en hPanel:
```
Nombre: josegaspard-frontend
Node.js: 20.x
Modo: Producción
Archivo de inicio: node_modules/next/dist/bin/next
Argumentos: start
```

### Después de subir archivos:
```bash
npm install --production
```

---

## Backend (NestJS)

### Archivos a subir a Hostinger:
- `dist/` - Código compilado
- `package.json` y `package-lock.json`
- `.env` (edita con tus valores reales)
- `database.sqlite`

### Configuración en hPanel:
```
Nombre: josegaspard-backend
Node.js: 20.x
Modo: Producción
Archivo de inicio: dist/main.js
```

### Después de subir archivos:
```bash
npm install --production
```

---

## Variables de Entorno

### Frontend (.env.production)
- `NEXT_PUBLIC_API_URL` → URL de tu backend (ej: https://api.josegaspard.dev)

### Backend (.env)
- `RESEND_API_KEY` → Tu API key de Resend
- `FROM_EMAIL` → Email de envío
- `FRONTEND_URL` → URL de tu frontend (ej: https://josegaspard.dev)
- `JWT_SECRET` → String aleatorio y seguro
- `NODE_ENV=production`

---

## Pasos siguientes:

1. ✅ Edita los archivos `.env` con tus valores reales
2. ✅ Sube los archivos a Hostinger via File Manager
3. ✅ Configura las apps Node.js en hPanel
4. ✅ Ejecuta `npm install --production` en cada app
5. ✅ Inicia las aplicaciones
6. ✅ Configura tus dominios

¡Listo! 🚀
EOF

echo -e "\n${GREEN}✅ Archivos preparados en: $DEPLOY_DIR/${NC}"
echo -e "${YELLOW}📝 Lee el archivo $DEPLOY_DIR/README.md para instrucciones${NC}"
echo -e "\n${BLUE}Próximos pasos:${NC}"
echo -e "  1. Edita los archivos .env con tus valores reales"
echo -e "  2. Sube los archivos a Hostinger via File Manager"
echo -e "  3. Sigue las instrucciones en DEPLOY_HOSTINGER.md"
