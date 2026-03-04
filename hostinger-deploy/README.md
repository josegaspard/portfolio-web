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
