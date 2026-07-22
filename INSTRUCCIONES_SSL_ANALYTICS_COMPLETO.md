# INSTRUCCIONES COMPLETAS SSL + ANALYTICS - MAYPROTEC

## 🔐 PARTE 1: CORREGIR SSL CLOUDFLARE

### DIAGNÓSTICO:
El sitio aparece como "no seguro" porque el certificado SSL no coincide con el dominio.

### PASO 1: VERIFICAR DNS CLOUDFLARE

1. Ir a: https://dash.cloudflare.com/
2. Login con tu cuenta Cloudflare
3. Seleccionar la zona: **mallas-barranquilla.com**
4. Ir a: **DNS** → **Records**
5. Verificar que tienes estos registros:

**Opción A: Cloudflare Pages (recomendado)**
```
Type: A     Name: @              Content: [IP de Pages]    Proxy: ON
Type: CNAME Name: www            Content: mallas-barranquilla.com.pages.dev  Proxy: ON
```

**Opción B: Hosting personal**
```
Type: A     Name: @              Content: [IP de tu hosting]  Proxy: ON
Type: CNAME Name: www            Content: [tu dominio]        Proxy: ON
```

6. Si algún registro está incorrecto, click en **Edit** y corrígelo
7. Click en **Save**

### PASO 2: ACTIVAR SSL CORRECTO

1. En Cloudflare Dashboard → **mallas-barranquilla.com**
2. Ir a: **SSL/TLS** → **Overview**
3. Verificar que estás en: **Full (Strict)**
   - Si no, cambiar a **Full (Strict)**
4. Click en **Save**

### PASO 3: ACTIVAR HTTPS REDIRECT

1. Ir a: **SSL/TLS** → **Edge Certificates**
2. Verificar que **Always Use HTTPS** está en **ON**
   - Si no, activarlo
3. Click en **Save**

### PASO 4: VERIFICAR UNIVERSAL SSL

1. En la misma página **Edge Certificates**
2. Buscar: **Universal SSL Status**
3. Si dice: **Pending**, click en: **Request Certificate**
4. Esperar 5-15 minutos para que se active
5. Si ya está: **Active Certificate**, perfecto

### PASO 5: CONFIGURACIÓN TLS

1. En **Edge Certificates**:
   - **Minimum TLS Version**: **1.2** (o 1.3)
   - **Opportunistic Encryption**: **OFF**
   - **TLS 1.3**: **ON** (si está disponible)
2. Click en **Save**

### PASO 6: VERIFICAR CERTIFICADO

1. Esperar 5-10 minutos
2. Abrir: https://mallas-barranquilla.com/
3. Verificar que el candado verde aparece
4. Click en el candado → **Connection is secure**

### PASO 7: CACHE PURGE (si sigue sin funcionar)

1. En Cloudflare Dashboard → **Caching**
2. Click en: **Purge Everything**
3. Esperar 1-2 minutos
4. Refrescar: https://mallas-barranquilla.com/

---

## 📊 PARTE 2: GOOGLE ANALYTICS 4 (GA4)

### PASO 1: CREAR PROPIEDAD GA4

1. Ir a: https://analytics.google.com/
2. Click en: **Comenzar a medir**
3. Login con tu Gmail
4. Click en: **Administrar** (ícono de engranaje abajo izquierda)
5. En la columna **Cuenta**, click en: **Crear cuenta**
   - **Nombre de la cuenta**: Mayprotec Mallas
   - Click en: **Siguiente**
6. En la columna **Propiedad**, click en: **Crear propiedad**
   - **Nombre de la propiedad**: Mallas Barranquilla
   - **Zona horaria**: Colombia (Bogota) GMT-5
   - **Moneda**: Peso colombiano (COP)
   - Click en: **Siguiente**
7. **Información sobre el negocio**:
   - **Categoría de industria**: Otros → Profesional
   - **Tamaño de la empresa**: Pequeña
   - **¿Cómo vas a utilizar Analytics con tu empresa?**: Todas las que apliquen
   - Click en: **Crear**
8. **Acepta los términos**: Click en: **Aceptar**
9. **Configurar flujo de datos**: Click en: **Web**
   - **URL del sitio web**: https://mallas-barranquilla.com
   - **Nombre del flujo de datos**: Mallas Barranquilla
   - Click en: **Crear flujo de datos**

### PASO 2: OBTENER MEASUREMENT ID

1. Después de crear, verás el ID en pantalla
2. El ID tiene formato: **G-XXXXXXXXXX**
3. Click en: **Configurar las etiquetas**
4. Selecciona: **Instalar manualmente**
5. Copiar el **Measurement ID** (G-XXXXXXXXXX)

### PASO 3: CONFIGURAR EN EL SITIO

1. Editar archivo: `/src/config/analytics.ts`
   ```typescript
   export const ANALYTICS = {
     ga4: {
       measurementId: 'G-XXXXXXXXXX',  // ← Pegar tu ID aquí
     },
     gtm: {
       containerId: '',  // Lo configuraremos después
     },
     gsc: {
       verificationCode: '',
     }
   };
   ```

2. Editar archivo: `/src/layouts/BaseLayout.astro`
   - Buscar línea ~85:
   ```javascript
   const GA_ID = ''; // Reemplazar con tu G-XXXXXXXXXX
   ```
   - Reemplazar con:
   ```javascript
   const GA_ID = 'G-XXXXXXXXXX'; // Tu ID real
   ```

3. Editar archivo: `/src/pages/test-analytics.astro`
   - Buscar línea ~5:
   ```astro
   const GOOGLE_ANALYTICS_ID = '';
   ```
   - Reemplazar con:
   ```astro
   const GOOGLE_ANALYTICS_ID = 'G-XXXXXXXXXX';
   ```

### PASO 4: COMMIT Y DEPLOY

```bash
git add -A
git commit -m "feat: Add GA4 tracking (G-XXXXXXXXXX)"
git push origin main
```

### PASO 5: VERIFICAR GA4

1. Ir a: https://analytics.google.com/
2. Ir a: **Administrar** → **Informes** → **Tiempo real**
3. Abrir: https://mallas-barranquilla.com/
4. Verificar que aparece tu visita en **Tiempo real**
5. Si no aparece, esperar 5-10 minutos (propagación)

### PASO 6: CONFIGURAR EVENTOS EN GA4

1. Ir a: **Administrar** → **Eventos** → **Crear evento**
2. Configurar eventos personalizados:
   - **Evento: whatsapp_click**
   - **Evento: form_submit**
   - **Evento: blog_read**
   - **Evento: pricing_click**

---

## 🎯 PARTE 3: GOOGLE TAG MANAGER (GTM)

### PASO 1: CREAR CUENTA GTM

1. Ir a: https://tagmanager.google.com/
2. Click en: **Crear cuenta**
3. Login con el mismo Gmail
4. Configurar cuenta:
   - **Nombre de la cuenta**: Mayprotec
   - **País**: Colombia
   - **¿Compartir datos de configuración?**: Desactivar
   - Click en: **Continuar**
5. Configurar contenedor:
   - **Nombre del contenedor**: mallas-barranquilla.com
   - **Plataforma**: Web
   - Click en: **Crear**
6. **Acepta los términos**: Click en: **Sí, tengo una cuenta de Google Analytics que quiero usar**
7. Click en: **Agregar Google Analytics 4**
8. Click en: **Contenedor**

### PASO 2: OBTENER CONTAINER ID

1. En el dashboard de GTM, verás tu **Container ID**
2. Tiene formato: **GTM-XXXXXXX**
3. Copiar este ID

### PASO 3: CONFIGURAR EN EL SITIO

1. Editar archivo: `/src/config/analytics.ts`
   ```typescript
   export const ANALYTICS = {
     ga4: {
       measurementId: 'G-XXXXXXXXXX',
     },
     gtm: {
       containerId: 'GTM-XXXXXXX',  // ← Pegar tu ID aquí
     },
     gsc: {
       verificationCode: '',
     }
   };
   ```

2. Editar archivo: `/src/layouts/BaseLayout.astro`
   - Buscar línea ~103:
   ```html
   <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
   ```
   - Reemplazar con:
   ```html
   <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
   ```

3. Editar archivo: `/src/pages/test-analytics.astro`
   - Buscar línea ~7:
   ```astro
   const GOOGLE_TAG_MANAGER_ID = '';
   ```
   - Reemplazar con:
   ```astro
   const GOOGLE_TAG_MANAGER_ID = 'GTM-XXXXXXX';
   ```

### PASO 4: COMMIT Y DEPLOY

```bash
git add -A
git commit -m "feat: Add GTM tracking (GTM-XXXXXXX)"
git push origin main
```

### PASO 5: PREVIEW GTM

1. Ir a: https://tagmanager.google.com/
2. Click en: **Vista previa** (botón naranja arriba derecha)
3. Se abrirá: https://mallas-barranquilla.com/?gtm_preview=GTM-XXXXXXX
4. Verificar que se carga el Tag Assistant
5. Navegar por el sitio
6. Verificar que los tags se disparan

### PASO 6: PUBLICAR CONTENEDOR

1. En GTM, click en: **Enviar** (botón azul arriba derecha)
2. **Versión del contenedor**: Version 1.0
3. **Nombre de la versión**: Instalación inicial
4. **Descripción**: GA4 + Tags base
5. Click en: **Publicar**

---

## 🔍 PARTE 4: GOOGLE SEARCH CONSOLE (GSC)

### OPCIÓN A: VERIFICACIÓN POR META TAG (RECOMENDADO)

### PASO 1: CREAR PROPIEDAD

1. Ir a: https://search.google.com/search-console
2. Click en: **Agregar una propiedad**
3. Seleccionar: **Prefijo de URL**
4. Pegar: `https://mallas-barranquilla.com/`
5. Click en: **Continuar**

### PASO 2: OBTENER META TAG

1. Seleccionar: **Etiqueta HTML**
2. Copiar el meta tag completo:
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX" />
   ```

### PASO 3: AÑADIR META TAG

1. Editar archivo: `/src/layouts/BaseLayout.astro`
2. Añadir el meta tag en `<head>` (línea ~43):
   ```html
   <meta name="google-site-verification" content="XXXXXXXXXXXX" />
   ```

### PASO 4: COMMIT Y DEPLOY

```bash
git add -A
git commit -m "feat: Add GSC verification meta tag"
git push origin main
```

### PASO 5: VERIFICAR

1. Esperar 5-10 minutos (propagación)
2. Ir a: https://search.google.com/search-console
3. Click en: **Verificar**
4. Debería decir: **Propiedad verificada**

### PASO 6: SUBMIT SITEMAP

1. En GSC, ir a: **Sitemaps**
2. Pegar: `sitemap-index.xml`
3. Click en: **Enviar**
4. Verificar que aparece como **Enviado y indexado**

### PASO 7: SOLICITAR INDEXACIÓN

1. En GSC, ir a: **Inspección de URL**
2. Pegar: https://mallas-barranquilla.com/
3. Click en: **Solicitar indexación**
4. Repetir para páginas importantes:
   - https://mallas-barranquilla.com/blog/
   - https://mallas-barranquilla.com/nosotros/
   - https://mallas-barranquilla.com/precios/

---

### OPCIÓN B: VERIFICACIÓN POR DNS (CLOUDFLARE)

### PASO 1: OBTENER REGISTRO DNS

1. En GSC, seleccionar: **Registro DNS**
2. Copiar el registro TXT completo

### PASO 2: AÑADIR REGISTRO EN CLOUDFLARE

1. Ir a: https://dash.cloudflare.com/
2. mallas-barranquilla.com → **DNS** → **Records**
3. Click: **Add Record**
4. Configurar:
   - **Type**: TXT
   - **Name**: @ (o mallas-barranquilla.com)
   - **Value**: google-site-verification=XXXXXXXXXXXX
   - **TTL**: Auto
5. Click: **Save**

### PASO 3: VERIFICAR

1. Esperar 5-10 minutos
2. En GSC, click en: **Verificar**

---

## 📋 PARTE 5: GOOGLE BUSINESS PROFILE (GBP)

### PASO 1: CREAR/OPTAR PERFIL

1. Ir a: https://business.google.com/
2. Click en: **Gestionar ahora**
3. Buscar: **Mayprotec**
4. Si existe, click en: **Reclamar este negocio**
5. Si no existe, click en: **Agregar su negocio en Google**

### PASO 2: CONFIGURAR INFORMACIÓN

**Información básica:**
- **Nombre del negocio**: Mayprotec
- **Categoría**: Empresa de seguridad / Instalación
- **¿Tiene ubicación física?**:
  - Sí → Añadir dirección real
  - No → Servicio local (Rank & Rent)
- **Área de servicio**: Barranquilla, Atlántico
- **Sitio web**: https://mallas-barranquilla.com
- **Teléfono**: +57300XXXXXXX
- **Email**: info@mallas-barranquilla.com

### PASO 3: VERIFICAR

**Opción A: Video verificación (instantáneo)**
1. Grabar video mostrando:
   - Exterior del negocio con señales de dirección
   - Interior del negocio
   - Herramientas/equipos que usas
2. Subir a Google Business
3. Verificación en 24-48 horas

**Opción B: Tarjeta postal (5-14 días)**
1. Completar dirección física completa
2. Request postal verification
3. Esperar tarjeta en correo
4. Ingresar código de verificación

### PASO 4: COMPLETAR PERFIL

**Horarios:**
- Lunes a viernes: 8:00 AM - 6:00 PM
- Sábado: 8:00 AM - 1:00 PM
- Domingo: Cerrado

**Descripción:**
```
Empresa especializada en instalación de mallas de seguridad para balcones, ventanas y terrazas en Barranquilla y el Atlántico. Protegemos a niños y mascotas con materiales anti-UV y garantía de 1 año. Cotización gratuita.
```

**Servicios (mínimo 3):**
- Mallas para balcones
- Mallas para ventanas
- Mallas para terrazas
- Protección para niños
- Protección para mascotas

**Fotos (mínimo 3):**
- Malla instalada en balcón
- Malla instalada en ventana
- Foto del equipo de instalación

**Atributos:**
- Servicio a domicilio: Sí
- Disponible de inmediato: Sí
- Envío a domicilio: Sí (si aplica)

---

## 🧪 PARTE 6: TESTING TRACKING

### PASO 1: TEST GA4

1. Ir a: https://analytics.google.com/
2. **Administrar** → **Informes** → **Tiempo real**
3. Abrir: https://mallas-barranquilla.com/
4. Deberías ver tu visita en tiempo real
5. Navegar por diferentes páginas
6. Verificar que se registran las vistas

### PASO 2: TEST GTM

1. Ir a: https://tagmanager.google.com/
2. Click en: **Vista previa**
3. Abrir: https://mallas-barranquilla.com/?gtm_preview=GTM-XXXXXXX
4. Navegar por el sitio
5. Verificar que los tags se disparan

### PASO 3: TEST GSC

1. Ir a: https://search.google.com/search-console
2. **Rendimiento** → **Consultas de búsqueda**
3. Verificar que aparecen datos (puede tardar 48 horas)

### PASO 4: TEST PÁGINA DE PRUEBA

1. Abrir: https://mallas-barranquilla.com/test-analytics
2. Click en los botones de test
3. Verificar en GA4 que los eventos se registran
4. Verificar en GTM que los tags se disparan

---

## 📊 PARTE 7: DASHBOARDS Y REPORTES

### GA4 - DASHBOARDS

1. Ir a: **Exploraciones** → **Galería de plantillas**
2. Crear dashboard:
   - **Visitas por página**
   - **Fuentes de tráfico**
   - **Eventos de conversión**
   - **Dispositivos y navegadores**

### GTM - PREVIEW MODE

1. Activar siempre antes de cambios
2. Verificar tags en producción
3. Debug mode para troubleshooting

### GSC - MONITOREO

1. **Rendimiento**: Queries, páginas, países
2. **Cobertura**: Errores de indexación
3. **Mejoras**: Core Web Vitals, Móvil, HTTPS
4. **Enlaces**: Backlinks externos

---

## 🔧 PARTE 8: RESOLUCIÓN DE PROBLEMAS

### SSL NO FUNCIONA

**Problema**: Certificado no coincide
**Solución**:
1. Verificar DNS records correctos
2. Activar Full (Strict) SSL
3. Request Universal SSL Certificate
4. Purge Cache
5. Esperar 5-10 minutos

### GA4 NO REGISTRA DATOS

**Problema**: No aparecen datos en tiempo real
**Solución**:
1. Verificar Measurement ID correcto
2. Verificar que el código está en todas las páginas
3. Esperar 5-10 minutos
4. Verificar que no hay bloqueadores de anuncios

### GTM NO FUNCIONA

**Problema**: Tags no se disparan
**Solución**:
1. Verificar Container ID correcto
2. Verificar que el contenedor está publicado
3. Usar Preview Mode para debug
4. Verificar que no hay errores de consola

### GSC NO VERIFICA

**Problema**: Propiedad no verificada
**Solución**:
1. Verificar meta tag en todas las páginas
2. Esperar 5-10 minutos
3. Probar con DNS TXT verification
4. Verificar que el sitio es HTTPS

---

## ✅ CHECKLIST FINAL

- [ ] SSL configurado (Full Strict)
- [ ] HTTP → HTTPS redirect activado
- [ ] GA4 tracking instalado y funcionando
- [ ] GTM tracking instalado y funcionando
- [ ] GSC verificado y sitemap enviado
- [ ] GBP creado, verificado y completado
- [ ] Eventos de conversión configurados
- [ ] Dashboards creados
- [ ] Test page funcionando
- [ ] Sitio HTTPS sin errores

---

## 📞 AYUDA RÁPIDA

- **SSL Issues**: https://support.cloudflare.com/hc/en-us/articles/200170416
- **GA4 Setup**: https://support.google.com/analytics/answer/9304153
- **GTM Setup**: https://support.google.com/tagmanager/answer/6103696
- **GSC Guide**: https://support.google.com/webmasters/answer/7451184
- **GBP Help**: https://support.google.com/business/answer/3038177

---

**TODO**: Una vez configures GA4, GTM y GSC, dime los IDs y actualizo el código.