#!/bin/bash

###############################################################################
# Script de Deployment Automatizado para VPS
# Uso: ./deploy-vps.sh
###############################################################################

set -e  # Exit on error

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Configuración - EDITA ESTOS VALORES
VPS_USER="root"
VPS_HOST="tu_ip_servidor"
VPS_PATH="/var/www/josegaspard-web"
FRONTEND_PATH="$VPS_PATH/frontend-next"
BACKEND_PATH="$VPS_PATH/backend"

echo -e "${GREEN}🚀 Iniciando deployment a VPS...${NC}\n"

# 1. Build local
echo -e "${YELLOW}📦 Building frontend...${NC}"
cd frontend-next
npm install
npm run build
cd ..

echo -e "${YELLOW}📦 Building backend...${NC}"
cd backend
npm install
npm run build
cd ..

# 2. Crear archivos temporales para transferencia
echo -e "${YELLOW}📁 Preparando archivos para transferencia...${NC}"
mkdir -p .deploy-temp

# Frontend
echo -e "  → Empaquetando frontend..."
tar -czf .deploy-temp/frontend.tar.gz \
  --exclude='node_modules' \
  --exclude='.next' \
  --exclude='.git' \
  -C frontend-next .

# Backend
echo -e "  → Empaquetando backend..."
tar -czf .deploy-temp/backend.tar.gz \
  --exclude='node_modules' \
  --exclude='dist' \
  --exclude='.git' \
  --exclude='database.sqlite' \
  -C backend .

# 3. Transferir archivos al VPS
echo -e "${YELLOW}📤 Transfiriendo archivos al VPS...${NC}"
ssh $VPS_USER@$VPS_HOST "mkdir -p $VPS_PATH/frontend-next $VPS_PATH/backend"

scp .deploy-temp/frontend.tar.gz $VPS_USER@$VPS_HOST:$VPS_PATH/frontend.tar.gz
scp .deploy-temp/backend.tar.gz $VPS_USER@$VPS_HOST:$VPS_PATH/backend.tar.gz
scp ecosystem.config.js $VPS_USER@$VPS_HOST:$VPS_PATH/

# 4. Desplegar en el servidor
echo -e "${YELLOW}🔧 Desplegando en el servidor...${NC}"
ssh $VPS_USER@$VPS_HOST << 'ENDSSH'
set -e

cd /var/www/josegaspard-web

# Extraer archivos
echo "  → Extrayendo frontend..."
tar -xzf frontend.tar.gz -C frontend-next/
echo "  → Extrayendo backend..."
tar -xzf backend.tar.gz -C backend/

# Instalar dependencias y construir
echo "  → Instalando dependencias de frontend..."
cd frontend-next
npm install --production
npm run build

echo "  → Instalando dependencias de backend..."
cd ../backend
npm install --production
npm run build

# Reiniciar servicios con PM2
echo "  → Reiniciando servicios..."
cd ..
pm2 delete all || true
pm2 start ecosystem.config.js
pm2 save

# Limpiar archivos temporales
rm -f frontend.tar.gz backend.tar.gz

echo "✅ Deployment completado en el servidor"
ENDSSH

# 5. Limpiar archivos locales temporales
echo -e "${YELLOW}🧹 Limpiando archivos temporales...${NC}"
rm -rf .deploy-temp

echo -e "\n${GREEN}✅ Deployment completado exitosamente!${NC}"
echo -e "${GREEN}🌐 Tu sitio debería estar disponible en:${NC}"
echo -e "   Frontend: http://$VPS_HOST:3000"
echo -e "   Backend:  http://$VPS_HOST:4000"
echo -e "\n${YELLOW}💡 Recuerda configurar Nginx para usar tu dominio${NC}"
