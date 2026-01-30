# 🚀 Guía para Cursor - Proyecto Portfolio Jose Gaspard

Este proyecto es un portfolio moderno construido con un stack robusto: **Angular 19** para el frontend y **NestJS (Node.js)** para el backend.

## 📂 Estructura del Proyecto

- **/frontend**: Aplicación Angular 19.
  - Usa SSR (Server-Side Rendering).
  - Estilos con CSS Vanilla (moderno y premium).
  - Animaciones con AOS (Animate On Scroll).
- **/backend**: API construida con NestJS.
  - Base de datos: SQLite para desarrollo (fácil de mover) con TypeORM.
  - Soporte para MySQL listo para producción.
  - Gestión de contenidos (Posts, Páginas, Proyectos).

## 🛠️ Desarrollo Local

### 1. Requisitos
- Node.js v18 o superior.
- npm.

### 2. Instalación de dependencias
Desde la raíz del proyecto, instala las dependencias en ambas carpetas:
```bash
# Frontend
cd frontend && npm install

# Backend
cd ../backend && npm install
```

### 3. Ejecución
Recomiendo usar dos terminales separadas en Cursor:
- Terminal 1 (Backend): `cd backend && npm run start:dev`
- Terminal 2 (Frontend): `cd frontend && npm run start`

## 🌐 Despliegue (Banahosting / cPanel)

El proyecto está configurado para ejecutarse como una aplicación Node.js en cPanel.

### Backend
1. Build: `npm run build` en la carpeta `backend`.
2. Sube la carpeta (sin `node_modules`) a tu servidor.
3. Configura la "Node.js App" en cPanel apuntando a `dist/main.js`.

### Frontend (SSR)
1. Build: `npm run build` en la carpeta `frontend`.
2. Sube el contenido de `dist/frontend` (server y browser).
3. Configura la "Node.js App" en cPanel apuntando a `server/server.mjs`.

## 💡 Notas para Cursor
- Si necesitas crear nuevos componentes en Angular, usa `ng generate component components/nombre`.
- El diseño es **Premium y Minimalista**. Mantén el uso de gradientes sutiles y tipografía limpia (Inter/Outfit).
- Para el SEO, el proyecto ya usa `Meta` y `Title` services de Angular.

---
*Hecho con ❤️ por Antigravity.*
