# Guía de Despliegue en Hostinger Business (Node.js Administrado)

¡Excelente! Con tu plan **Hostinger Business** tienes acceso a **5 apps web Node.js administradas**. Esto significa que puedes desplegar tanto el frontend (Next.js) como el backend (NestJS) directamente en Hostinger.

---

## 📋 Requisitos Previos

- ✅ Plan Hostinger Business activo
- ✅ Acceso a hPanel (panel de control de Hostinger)
- ✅ Dominio configurado (ej: josegaspard.dev)
- ✅ Archivos del proyecto listos para deployment

---

## 🚀 Paso 1: Preparar el Backend (NestJS)

### 1.1 Construir el backend localmente

```bash
cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/backend
npm install
npm run build
```

### 1.2 Crear archivo de configuración para producción

El archivo `.env.production` ya debe estar configurado con:
- URL del frontend en producción
- Credenciales de base de datos
- JWT secret seguro
- API keys

### 1.3 Preparar archivos para subir

Necesitas subir:
- ✅ Carpeta `dist/` (código compilado)
- ✅ `package.json` y `package-lock.json`
- ✅ `.env` (con valores de producción)
- ✅ `database.sqlite` (si usas SQLite)
- ❌ NO subir: `node_modules/`, `src/`, `.git/`

---

## 🎨 Paso 2: Preparar el Frontend (Next.js)

### 2.1 Construir el frontend localmente

```bash
cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/frontend-next
npm install
npm run build
```

### 2.2 Configurar variables de entorno

Asegúrate de que `.env.production` tenga:
```env
NEXT_PUBLIC_API_URL=https://api.tudominio.com
```

### 2.3 Preparar archivos para subir

Necesitas subir:
- ✅ Carpeta `.next/` (build de producción)
- ✅ Carpeta `public/`
- ✅ `package.json` y `package-lock.json`
- ✅ `next.config.mjs`
- ✅ `.env.production`
- ❌ NO subir: `node_modules/`, `src/`, `.git/`

---

## 🔧 Paso 3: Configurar Apps Node.js en Hostinger

### 3.1 Crear App Node.js para el Backend

1. **Accede a hPanel**
   - Ve a tu panel de Hostinger
   - Busca la sección **"Node.js"** o **"Apps Web Node.js"**

2. **Crear nueva aplicación**
   - Click en **"Crear aplicación Node.js"**
   - Configuración:
     ```
     Nombre de la aplicación: josegaspard-backend
     Versión de Node.js: 20.x (recomendado)
     Modo de aplicación: Producción
     Ruta de la aplicación: /backend
     Archivo de inicio: dist/main.js
     Puerto: (Hostinger lo asigna automáticamente)
     ```

3. **Subir archivos del backend**
   - Usa el **File Manager** de hPanel
   - Navega a `/backend`
   - Sube: `dist/`, `package.json`, `package-lock.json`, `.env`, `database.sqlite`

4. **Instalar dependencias**
   - En la configuración de la app Node.js, ejecuta:
     ```bash
     npm install --production
     ```

5. **Configurar variables de entorno**
   - En la sección de variables de entorno de la app:
     ```
     NODE_ENV=production
     PORT=(el que asigne Hostinger)
     RESEND_API_KEY=re_GHrgJnPt_BaWnb6QFbZvmURgQksoqTyJb
     FROM_EMAIL=hola@josegaspard.dev
     FRONTEND_URL=https://josegaspard.dev
     JWT_SECRET=tu-secret-key-super-seguro
     ```

6. **Iniciar la aplicación**
   - Click en **"Iniciar"** o **"Restart"**
   - Hostinger te dará una URL como: `https://backend-12345.hostinger.com`

### 3.2 Crear App Node.js para el Frontend

1. **Crear segunda aplicación Node.js**
   - Click en **"Crear aplicación Node.js"**
   - Configuración:
     ```
     Nombre de la aplicación: josegaspard-frontend
     Versión de Node.js: 20.x
     Modo de aplicación: Producción
     Ruta de la aplicación: /frontend-next
     Archivo de inicio: node_modules/next/dist/bin/next
     Argumentos: start
     Puerto: (Hostinger lo asigna automáticamente)
     ```

2. **Subir archivos del frontend**
   - Usa el File Manager
   - Navega a `/frontend-next`
   - Sube: `.next/`, `public/`, `package.json`, `package-lock.json`, `next.config.mjs`, `.env.production`

3. **Instalar dependencias**
   ```bash
   npm install --production
   ```

4. **Configurar variables de entorno**
   ```
   NODE_ENV=production
   NEXT_PUBLIC_API_URL=https://api.josegaspard.dev
   ```

5. **Iniciar la aplicación**
   - Click en **"Iniciar"**
   - Hostinger te dará una URL como: `https://frontend-67890.hostinger.com`

---

## 🌐 Paso 4: Configurar Dominios

### 4.1 Configurar dominio principal para el frontend

1. **En hPanel → Dominios**
   - Selecciona tu dominio: `josegaspard.dev`
   - Ve a **"Gestionar"**

2. **Configurar DNS/Proxy**
   - Apunta el dominio a tu app Node.js del frontend
   - Hostinger tiene una opción para vincular dominios a apps Node.js

### 4.2 Configurar subdominio para el backend

1. **Crear subdominio**
   - En hPanel → Dominios → Subdominios
   - Crear: `api.josegaspard.dev`

2. **Vincular a la app Node.js del backend**
   - Apunta `api.josegaspard.dev` a tu app backend

---

## 🔐 Paso 5: Configurar SSL (HTTPS)

Hostinger incluye SSL gratuito:

1. **En hPanel → SSL**
2. **Activar SSL** para:
   - `josegaspard.dev`
   - `www.josegaspard.dev`
   - `api.josegaspard.dev`

Hostinger instalará automáticamente certificados Let's Encrypt.

---

## ✅ Paso 6: Verificación Final

### Checklist de verificación:

- [ ] Backend accesible en `https://api.josegaspard.dev`
- [ ] Frontend accesible en `https://josegaspard.dev`
- [ ] Formulario de contacto funciona
- [ ] Blog carga correctamente
- [ ] No hay errores de CORS
- [ ] SSL activo (candado verde)
- [ ] Base de datos funciona correctamente

### Probar endpoints del backend:

```bash
# Health check
curl https://api.josegaspard.dev/health

# Verificar CORS
curl -H "Origin: https://josegaspard.dev" \
     -H "Access-Control-Request-Method: POST" \
     -H "Access-Control-Request-Headers: Content-Type" \
     -X OPTIONS \
     https://api.josegaspard.dev/contact-messages
```

---

## 🔄 Actualizar el Sitio (Deployments Futuros)

### Método 1: Manual via File Manager

1. Construir localmente: `npm run build`
2. Subir archivos actualizados via File Manager
3. Reiniciar la app en hPanel

### Método 2: Git (Recomendado)

1. **Conectar repositorio GitHub**
   - En hPanel → Git
   - Conecta tu repositorio
   - Configura auto-deploy en push

2. **Workflow automático**
   ```
   git push origin main
   → Hostinger detecta cambios
   → Ejecuta npm install && npm run build
   → Reinicia la aplicación
   ```

---

## 🐛 Troubleshooting

### Error: "Application failed to start"

**Solución:**
- Verifica que el archivo de inicio sea correcto
- Backend: `dist/main.js`
- Frontend: `node_modules/next/dist/bin/next` con argumento `start`

### Error: CORS

**Solución:**
- Verifica que `FRONTEND_URL` en backend apunte a tu dominio real
- Asegúrate de que el backend esté configurado para aceptar requests de tu dominio

### Error: 502 Bad Gateway

**Solución:**
- La app Node.js no está corriendo
- Ve a hPanel → Node.js Apps → Reiniciar aplicación
- Revisa los logs de la aplicación

### Error: Database connection failed

**Solución:**
- Verifica que `database.sqlite` esté en la ruta correcta
- Asegúrate de que los permisos del archivo sean correctos (644)

---

## 📊 Monitoreo

### Logs de aplicación

En hPanel → Node.js Apps → Ver logs:
- **Error logs**: Errores de la aplicación
- **Access logs**: Requests HTTP
- **Application logs**: Console.log de tu app

### Recursos utilizados

Monitorea:
- CPU usage
- RAM usage
- Número de apps Node.js usadas (tienes 5 disponibles)

---

## 💡 Consejos Pro

1. **Backups automáticos**: Hostinger Business incluye backups diarios
2. **CDN gratis**: Activa el CDN de Hostinger para mejor rendimiento
3. **Cache**: Configura cache headers en Nginx (Hostinger lo gestiona)
4. **Monitoring**: Usa los logs de Hostinger para debugging
5. **Escalabilidad**: Si necesitas más recursos, puedes upgrade a Cloud Startup (10 apps Node.js)

---

## 🎯 Próximos Pasos

1. ✅ Construir ambos proyectos localmente
2. ✅ Subir archivos a Hostinger via File Manager
3. ✅ Configurar apps Node.js en hPanel
4. ✅ Vincular dominios
5. ✅ Activar SSL
6. ✅ Probar todo funcione correctamente

¿Listo para empezar? ¡Sigue los pasos y tu portafolio estará online en minutos! 🚀
