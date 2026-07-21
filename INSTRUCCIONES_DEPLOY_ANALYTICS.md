# INSTRUCCIONES DEPLOY CLOUDFLARE PAGES + GA/GTM/GSC SETUP

## 1. CONECTAR CLOUDFLARE PAGES A GITHUB

1. Ir a: https://dash.cloudflare.com/
2. Seleccionar el dominio: mallas-barranquilla.com
3. Ir a: **Pages** → **Create a project**
4. Seleccionar: **Connect to Git**
5. Autorizar Cloudflare a acceder a GitHub (si no está autorizado)
6. Seleccionar repo: **aldanasoy/maprotec**
7. Configurar build settings:
   ```
   Build command: npm run build
   Build output directory: dist
   Root directory: (dejar vacío o /)
   ```
8. Click: **Save and Deploy**

El primer deploy tomará 2-3 minutos. Los siguientes serán automáticos en cada push a `main`.

---

## 2. CONFIGURAR SSL CLOUDFLARE

1. Ir a: https://dash.cloudflare.com/
2. Seleccionar: mallas-barranquilla.com
3. Ir a: **SSL/TLS** → **Overview**
4. Cambiar a: **Full (Strict)**
5. Ir a: **Edge Certificates**
6. Activar: **Always Use HTTPS** (ON)
7. Esperar 1-2 minutos para propagación

---

## 3. GOOGLE ANALYTICS 4 (GA4)

1. Ir a: https://analytics.google.com/
2. Loguearse con Gmail (el mismo del proyecto)
3. Click: **Comenzar a medir** → **Administrar**
4. Click: **Crear cuenta**
5. Nombre cuenta: Mayprotec Mallas Barranquilla
6. Nombre propiedad: Mallas Barranquilla
7. URL de propiedad: https://mallas-barranquilla.com
8. Categoría de industria: Otros → Profesional
9. Zona horaria: Colombia (Bogota)
10. Click: **Crear**
11. Copiar **Measurement ID** (G-XXXXXXXXXX)
12. Editar archivo: `/src/config/analytics.ts`
    ```typescript
    export const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX'; // Reemplazar con tu ID
    ```
13. Commit y push a GitHub

---

## 4. GOOGLE TAG MANAGER (GTM)

1. Ir a: https://tagmanager.google.com/
2. Loguearse con el mismo Gmail
3. Click: **Crear cuenta**
4. Nombre cuenta: Mayprotec
5. Nombre contenedor: mallas-barranquilla.com
6. Plataforma: Web
7. Click: **Crear**
8. Aceptar términos
9. Copiar **Container ID** (GTM-XXXXXXX)
10. Editar archivo: `/src/config/analytics.ts`
    ```typescript
    export const GOOGLE_TAG_MANAGER_ID = 'GTM-XXXXXXX'; // Reemplazar con tu ID
    ```
11. Commit y push a GitHub

---

## 5. GOOGLE SEARCH CONSOLE (GSC)

### Opción A: Verificación por HTML tag (recomendado)

1. Ir a: https://search.google.com/search-console
2. Click: **Agregar propiedad** → **Prefijo de URL**
3. Pegar: `https://mallas-barranquilla.com/`
4. Click: **Continuar**
5. Seleccionar: **Etiqueta HTML**
6. Copiar meta tag de verificación:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX" />
   ```
7. Editar archivo: `/src/layouts/BaseLayout.astro`
   - Añadir la meta tag en `<head>` (línea ~43)
8. Commit y push a GitHub
9. Click: **Verificar** en Google Search Console
10. Submit sitemap:
    - Ir a: **Sitemaps** en GSC
    - Pegar: `sitemap-index.xml`
    - Click: **Enviar**

### Opción B: Verificación por DNS (si Cloudflare tiene control)

1. En GSC, seleccionar: **Registro DNS**
2. Copiar registro TXT de verificación
3. Ir a Cloudflare DNS para mallas-barranquilla.com
4. Añadir registro TXT:
   - Name: (dejar vacío o @)
   - Type: TXT
   - Value: pegar contenido de GSC
5. Click: **Save**
6. Esperar 5-10 minutos
7. Click: **Verificar** en GSC

---

## 6. GOOGLE BUSINESS PROFILE (GBP)

### Creación

1. Ir a: https://business.google.com/
2. Click: **Gestionar ahora**
3. Loguearse con el mismo Gmail
4. Click: **Agregar su negocio en Google**
5. Buscar negocio: "Mayprotec" (si existe)
6. Si no existe, crear nuevo:
   - Nombre negocio: Mayprotec
   - Categoría: Empresa de seguridad / Instalación
   - ¿Tienes ubicación?: Sí / No (Rank & Rent)
   - Área de servicio: Barranquilla, Atlántico

### Verificación

**Opción A: Tarjeta postal (toma 5-14 días)**
1. Completar dirección física completa
2. Request postal verification
3. Esperar tarjeta en correo
4. Ingresar código de verificación

**Opción B: Video verificación (instantáneo)**
1. Grabar video mostrando:
   - Exterior del negocio con señales de dirección
   - Interior del negocio
   - Equipos/herramientas usados
2. Subir a Google Business
3. Verificación en 24-48 horas

### Completar Perfil

**Información básica:**
- Nombre: Mayprotec
- Dirección: (opcional si es R&R)
- Teléfono: +57300XXXXXXX (WhatsApp)
- Email: info@mallas-barranquilla.com
- Website: https://mallas-barranquilla.com

**Horarios:**
- Lun-Vie: 8:00 AM - 6:00 PM
- Sáb: 8:00 AM - 1:00 PM
- Dom: Cerrado

**Descripción:**
```
Empresa especializada en instalación de mallas de seguridad para balcones, ventanas y terrazas en Barranquilla y el Atlántico. Protegemos a niños y mascotas con materiales anti-UV y garantía de 1 año. Cotización gratuita.
```

**Servicios:**
- Mallas para balcones
- Mallas para ventanas
- Mallas para terrazas
- Protección para niños
- Protección para mascotas

**Fotos:**
- Mínimo 3 fotos de trabajos reales
- 1 foto del equipo
- 1 foto de equipo instalando

**Atributos:**
- Envío a domicilio
- Servicio a domicilio
- Disponible de inmediato

---

## 7. MONITOREO Y MANTENIMIENTO

### Semanalmente:
- [ ] Revisar GA4 para tráfico
- [ ] Revisar GSC para errores de indexación
- [ ] Revisar GBP para nuevas reviews
- [ ] Verificar SSL certificate (Cloudflare)

### Mensualmente:
- [ ] Revisar ranking de keywords
- [ ] Actualizar contenido del blog (1-2 posts)
- [ ] Revisar leads generados
- [ ] Verificar uptime del sitio

### Trimestralmente:
- [ ] Auditar SEO on-page
- [ ] Revisar backlinks
- [ ] Actualizar schema.org
- [ ] Revisar competidores locales

---

## 8. RANK & RENT - GESTIÓN DE LEADS

### Si es R&D (Rank & Donar) para uso propio:
- Añadir WhatsApp real: +57300...
- Configurar formularios para ir al WhatsApp

### Si es Rank & Rent para cliente:
- Obtener NAP real del cliente
- Reemplazar placeholders en el código
- Añadir número de WhatsApp del cliente
- Configurar redirección de leads

### Lead Distribution:
- [ ] Formulario → WhatsApp
- [ ] Formulario → Email
- [ ] Formulario → GestionaLeads (opcional)
- [ ] Call tracking (si aplica)

---

## 9. CHECKLIST FINAL ANTES DE LANZAR

- [ ] SSL configurado (Full Strict)
- [ ] HTTP → HTTPS redirect activado
- [ ] GA4 tracking instalado
- [ ] GTM tracking instalado
- [ ] GSC verificado
- [ ] Sitemap subido a GSC
- [ ] GBP creado y verificado
- [ ] WhatsApp botón funcional
- [ ] Formularios funcionales
- [ ] Blog posts publicados
- [ ] Reviews en GBP (mínimo 3)
- [ ] Citations creadas (Facebook, Instagram)
- [ ] Sitio responsive (mobile + desktop)
- [ ] Site speed < 3 segundos (PageSpeed Insights)

---

## 10. ENLACES RÁPIDOS

- Cloudflare Dashboard: https://dash.cloudflare.com/
- Cloudflare Pages: https://dash.cloudflare.com/→ Pages → mallas-barranquilla.com
- Google Analytics: https://analytics.google.com/
- Google Tag Manager: https://tagmanager.google.com/
- Google Search Console: https://search.google.com/search-console
- Google Business Profile: https://business.google.com/
- PageSpeed Insights: https://pagespeed.web.dev/
- Repo GitHub: https://github.com/aldanasoy/maprotec

---

## 11. BACKUP Y DEPLOY

### Deploy manual (si Pages falla):
```bash
cd /opt/data/projects/maprotec
npm run build
# Upload /opt/data/projects/maprotec/dist/* to hosting
```

### Cloudflare Pages logs:
1. Ir a Cloudflare Dashboard
2. Pages → mallas-barranquilla.com
3. Deployments → View logs

### Rollback si algo falla:
```bash
git log --oneline
git checkout <commit-hash>
git push -f origin main
```

---

**NOTA IMPORTANTE:** Todo el código está listo y optimizado para SEO local. Solo falta configurar las cuentas de Google y conectar Cloudflare Pages al repo para deploy automático.