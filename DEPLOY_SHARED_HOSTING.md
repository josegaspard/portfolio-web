# Guía de Despliegue en Hostinger Shared Hosting

Esta guía te ayudará a desplegar tu portafolio en **Hostinger Shared Hosting** (hosting compartido) que solo soporta PHP, HTML, CSS y JavaScript estático.

## ⚠️ Limitaciones de Shared Hosting

Hostinger Shared Hosting **NO soporta**:
- ❌ Node.js en ejecución permanente
- ❌ Aplicaciones backend (NestJS, Express)
- ❌ Bases de datos SQLite en servidor
- ❌ PM2 o gestores de procesos

**Solución**: Exportar Next.js como sitio estático y usar servicios externos para el backend.

---

## Opción 1: Frontend Estático + Backend Externo (Recomendado)

### Paso 1: Preparar Frontend para Exportación Estática

#### 1.1 Construir versión estática
```bash
cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/frontend-next
npm run build:static
```

Esto generará una carpeta `out/` con archivos HTML/CSS/JS estáticos.

#### 1.2 Subir archivos a Hostinger

**Opción A: Via File Manager (Panel de Control)**
1. Ingresa a tu panel de Hostinger
2. Ve a **File Manager**
3. Navega a `public_html/`
4. Sube todo el contenido de la carpeta `out/`

**Opción B: Via FTP**
1. Usa FileZilla o cualquier cliente FTP
2. Conecta con las credenciales de Hostinger
3. Sube el contenido de `out/` a `public_html/`

#### 1.3 Configurar .htaccess

Crea o edita el archivo `.htaccess` en `public_html/`:

```apache
# Habilitar rewrite engine
RewriteEngine On

# Forzar HTTPS (opcional pero recomendado)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# SPA Routing - Redirigir todas las rutas a index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Headers de seguridad
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>

# Cache para assets estáticos
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

### Paso 2: Desplegar Backend en Servicio Externo

Como Shared Hosting no soporta Node.js, despliega el backend en un servicio gratuito:

#### Opción A: Railway (Recomendado - Gratis)

1. **Crear cuenta en Railway**
   - Ve a [railway.app](https://railway.app)
   - Regístrate con GitHub

2. **Crear nuevo proyecto**
   ```bash
   # Desde tu terminal local
   cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/backend
   
   # Instalar Railway CLI
   npm install -g @railway/cli
   
   # Login
   railway login
   
   # Inicializar proyecto
   railway init
   
   # Deploy
   railway up
   ```

3. **Configurar variables de entorno en Railway**
   - Ve a tu proyecto en Railway dashboard
   - Settings → Variables
   - Agrega:
     ```
     RESEND_API_KEY=re_GHrgJnPt_BaWnb6QFbZvmURgQksoqTyJb
     FROM_EMAIL=hola@josegaspard.dev
     FRONTEND_URL=https://tudominio.com
     JWT_SECRET=tu-secret-key-seguro-aqui
     NODE_ENV=production
     ```

4. **Obtener URL del backend**
   - Railway te dará una URL como: `https://tu-proyecto.railway.app`
   - Copia esta URL

#### Opción B: Render (Alternativa Gratuita)

1. Ve a [render.com](https://render.com)
2. Conecta tu repositorio de GitHub
3. Crea un nuevo **Web Service**
4. Selecciona la carpeta `backend`
5. Configura:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm run start:prod`
6. Agrega las variables de entorno (igual que Railway)

#### Opción C: Vercel (Solo para API Routes)

1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repositorio
3. Configura el proyecto apuntando a `/backend`
4. Vercel detectará NestJS automáticamente

---

### Paso 3: Conectar Frontend con Backend

#### 3.1 Actualizar URL del API

Antes de hacer `npm run build:static`, edita el archivo de configuración:

**Archivo**: `frontend-next/.env.production`
```env
NEXT_PUBLIC_API_URL=https://tu-proyecto.railway.app
```

#### 3.2 Reconstruir frontend
```bash
cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/frontend-next
npm run build:static
```

#### 3.3 Re-subir a Hostinger
Sube nuevamente el contenido de `out/` a `public_html/`

---

## Opción 2: Todo en Servicios Gratuitos (Sin Hostinger)

Si prefieres no usar Hostinger para el frontend:

### Frontend en Vercel/Netlify
```bash
# Vercel
cd /Users/josegaspard/.gemini/antigravity/scratch/josegaspard-web/frontend-next
vercel

# O Netlify
netlify deploy --prod
```

### Backend en Railway/Render
(Sigue los pasos del Paso 2 arriba)

### Dominio en Hostinger
- Usa Hostinger solo para gestionar tu dominio
- Apunta los DNS a Vercel/Netlify

---

## Configuración de Dominio

### Si usas Hostinger para frontend:

1. **Dominio principal** → Apunta a Hostinger (ya configurado)
2. **Subdominio API** → Crea un subdominio `api.tudominio.com`
   - En Hostinger: Dominios → Gestionar → Subdominios
   - Crea `api`
   - En DNS, agrega un registro CNAME:
     ```
     Tipo: CNAME
     Nombre: api
     Apunta a: tu-proyecto.railway.app
     ```

### Si usas Vercel para frontend:

1. En Vercel → Settings → Domains
2. Agrega `tudominio.com`
3. Vercel te dará instrucciones de DNS
4. En Hostinger → DNS → Agrega los registros que Vercel indica

---

## Verificación

### ✅ Checklist Final

- [ ] Frontend accesible en `https://tudominio.com`
- [ ] Backend accesible en `https://api.tudominio.com` o Railway URL
- [ ] Formulario de contacto funciona
- [ ] Blog carga correctamente
- [ ] No hay errores de CORS
- [ ] Certificado SSL activo (candado verde)

### 🔧 Troubleshooting

**Error: CORS**
- Verifica que `FRONTEND_URL` en backend apunte a tu dominio real
- Revisa que el backend esté configurado para aceptar requests de tu dominio

**Error: 404 en rutas**
- Verifica que `.htaccess` esté correctamente configurado
- Asegúrate de que `RewriteEngine On` esté activo

**Error: API no responde**
- Verifica que el backend esté corriendo en Railway/Render
- Revisa los logs en el dashboard del servicio
- Confirma que las variables de entorno estén configuradas

---

## Costos

### Opción 1 (Hostinger + Railway/Render)
- **Hostinger Shared**: Ya lo tienes
- **Railway**: Gratis (con límites)
- **Total**: $0/mes adicional

### Opción 2 (Todo en servicios gratuitos)
- **Vercel**: Gratis
- **Railway**: Gratis
- **Hostinger**: Solo dominio (~$2-5/año)
- **Total**: ~$0.20/mes

---

## Próximos Pasos

1. Decide qué opción usar (1 o 2)
2. Sigue los pasos correspondientes
3. Prueba todo en local antes de subir
4. Despliega paso a paso
5. Verifica que todo funcione

¿Necesitas ayuda con algún paso específico? ¡Avísame!
