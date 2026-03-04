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

## 🚀 Despliegue Manual en Hostinger (Recomendado)

Debido a que este repositorio es un **Monorepo** (Frontend y Backend conviven juntos), la función de "Auto-Deploy desde Git" de Hostinger fallará porque solo busca frameworks en la carpeta principal.

Para desplegar tu web, sube los archivos `.zip` compilados manualmente:

1. Ve a **hPanel > Administrador de Archivos**.
2. Crea tus aplicaciones Node.js (Frontend y Backend).
3. Sube y extrae el archivo `backend-dist.zip` en la carpeta `/backend`.
4. Sube y extrae el archivo `frontend-next-dist.zip` en la carpeta `/frontend-next`.
5. Ejecuta `npm install` en ambas apps y dales a iniciar.
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
