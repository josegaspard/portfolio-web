# Jose Gaspard - Portfolio Web

Full-stack portfolio website built with Next.js and NestJS.

## Structure

- `/frontend-next` - Next.js frontend application
- `/backend` - NestJS backend API

## Deployment

### Backend
```bash
cd backend
npm install
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend-next
npm install
npm run build
npm run start
```

## 🚀 1-Click Hostinger Git Deployment

Este repositorio está configurado para desplegarse automáticamente en los planes **Hostinger Business** o **Cloud** utilizando la función **Apps Web Node.js** a través de tu repositorio de GitHub. 

Cada vez que hagas un push a `main`, Hostinger descargará el código, ejecutará `npm install` y gracias a los scripts `postinstall`, compilará el código de producción automáticamente.

### Pasos en hPanel de Hostinger:
1. Asegúrate de tener conectada tu cuenta de GitHub a Hostinger (Menú Avanzado \> Git).
2. Ve a **"Node.js Apps"** y crea dos aplicaciones.

**A) CONFIGURACIÓN FRONTEND (Next.js)**
- **Nombre:** `portfolio-frontend`
- **Modo:** `Producción`
- **Raíz de la aplicación (App Root):** `/frontend-next`
- **Archivo de Inicio (Startup File):** `node_modules/next/dist/bin/next`
- **Argumentos CLI:** `start` (escríbelo en la caja de argumentos y dale a *Añadir*)
- **URL:** Tu dominio principal (ej: `josegaspard.dev`)

**B) CONFIGURACIÓN BACKEND (NestJS)**
- **Nombre:** `portfolio-backend`
- **Modo:** `Producción`
- **Raíz de la aplicación (App Root):** `/backend`
- **Archivo de Inicio (Startup File):** `dist/main.js`
- **URL:** Tu subdominio de API (ej: `api.josegaspard.dev`)

🚀 ¡Listo! Hostinger instalará todo, compilará y ejecutará las versiones optimizadas por ti.
 
## Environment Variables

See `.env.example` files in each directory.

## Repository
https://github.com/josegaspard/portfolio-web
