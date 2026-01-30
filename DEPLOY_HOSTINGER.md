# Guía de Despliegue en Hostinger (VPS)

Esta guía detalla los pasos para desplegar tu aplicación Full Stack (Backend NestJS + Frontend Next.js) en un servidor VPS de Hostinger con Ubuntu 22.04/24.04 (o cualquier servidor Linux estándar).

> **NOTA IMPORTANTE**: Para este stack (Node.js + NestJS + Next.js SSR), se recomienda encarecidamente usar un **VPS**, no Shared Hosting. Si usas Shared Hosting, las opciones de Node.js son limitadas y no tendrás acceso root para gestionar procesos correctamente con PM2.

## 1. Preparación del Servidor (VPS)

Conéctate a tu VPS vía SSH:
```bash
ssh root@tu_ip_servidor
```

### Instalar Node.js y NPM (v20 recomendado)
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Instalar PM2 (Gestor de Procesos)
PM2 mantendrá tus aplicaciones vivas por siempre.
```bash
sudo npm install -g pm2
```

### Instalar Nginx (Servidor Web Proxy Inverso)
```bash
sudo apt-get update
sudo apt-get install -y nginx
```

---

## 2. Despliegue del Backend (NestJS)

### Subir Archivos
Sube tu carpeta `backend` al servidor (ej. `/var/www/josegaspard-backend`). Puedes usar FileZilla (SFTP) o `scp`.
*Excluye la carpeta `node_modules` y `.git` al subir.*

### Instalar y Construir
En el servidor:
```bash
cd /var/www/josegaspard-backend
npm install
npm run build
```

### Configurar PM2
```bash
pm2 start dist/main.js --name "backend-api"
```
El backend ahora corre en `http://localhost:4000` (o el puerto que hayas configurado).

---

## 3. Despliegue del Frontend (Next.js)

### Subir Archivos
Sube tu carpeta `frontend-next` al servidor (ej. `/var/www/josegaspard-frontend`).
*Excluye `node_modules`, `.next`, y `.git`.*

### Instalar y Construir
En el servidor:
```bash
cd /var/www/josegaspard-frontend
npm install
npm run build
```

### Configurar PM2
```bash
pm2 start npm --name "frontend-next" -- start
```
Por defecto, Next.js correrá en `http://localhost:3000`.

---

## 4. Configurar Dominio con Nginx

Ahora configuraremos Nginx para que redirija el tráfico de tu dominio a estos puertos locales.

Edita la configuración:
```bash
sudo nano /etc/nginx/sites-available/default
```

Reemplaza/Añade el siguiente contenido (ajusta `tu_dominio.com`):

```nginx
# Frontend (Next.js)
server {
    listen 80;
    server_name josegaspard.dev www.josegaspard.dev;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}

# Backend (API)
server {
    listen 80;
    server_name api.josegaspard.dev;

    location / {
        proxy_pass http://localhost:4000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Guarda (`Ctrl+O`, `Enter`) y sal (`Ctrl+X`).

### Reiniciar Nginx
```bash
sudo nginx -t  # Verificar sintaxis
sudo systemctl restart nginx
```

---

## 5. SSL (HTTPS) con Certbot

Instala Certbot para certificados SSL gratuitos:
```bash
sudo apt-get install -y certbot python3-certbot-nginx
```

Genera los certificados:
```bash
sudo certbot --nginx -d josegaspard.dev -d www.josegaspard.dev -d api.josegaspard.dev
```
Sigue las instrucciones y elige "Redirect" para forzar HTTPS.

---

## ¡Listo!
Tu aplicación debería estar accesible en:
- Frontend: `https://josegaspard.dev`
- Backend API: `https://api.josegaspard.dev`
