# SEO LOCAL & RANK & RENT CHECKLIST - MAYPROTEC (Mallas Barranquilla)

## ✅ COMPLETADO

### ESTRUCTURA TÉCNICA
- [x] Dominio: mallas-barranquilla.com
- [x] Hosting: Cloudflare Pages
- [x] SSL: Configurado en Cloudflare (necesita activación)
- [x] Sitemap generado: https://mallas-barranquilla.com/sitemap-index.xml
- [x] Robots.txt: /public/robots.txt
- [x] hreflang: es-CO (BaseLayout.astro)

### SEO ON-PAGE
- [x] Title tags optimizados (home y páginas)
- [x] Meta descriptions
- [x] H1-H6 structure
- [x] URLs amigables
- [x] Imágenes con alt text
- [x] Internal linking

### SCHEMA.ORG
- [x] WebSite schema
- [x] LocalBusiness schema (BaseLayout)
- [x] Service schema (home)
- [x] FAQPage schema (home)
- [x] BlogPosting schema (artículos)
- [x] BreadcrumbList schema

### CONTENIDO
- [x] Home page completa
- [x] Servicios (InstalTypes, Process)
- [x] Precios
- [x] Galería
- [x] Nosotros
- [x] Contacto
- [x] Blog (3 artículos)
- [x] Aviso Legal
- [x] Política de Privacidad
- [x] Página de Gracias

### ESPAÑOL
- [x] Ortografía completa (ñ, tildes)
- [x] Signos de apertura/cierre (¿¡)
- [x] Espacios entre párrafos/títulos

### UX/UI
- [x] Logo footer blanco
- [x] Links hover verde
- [x] Tipografía mejorada en blog
- [x] Responsivo (mobile-first)

---

## 🔜 PENDIENTE (NECESITA ACCIÓN MANUAL)

### SSL CLOUDFLARE
- [ ] Cloudflare SSL Mode: Full (Strict)
- [ ] Redirigir HTTP → HTTPS
- [ ] Verificar certificado SSL

### GOOGLE ANALYTICS (GA4)
- [ ] Crear propiedad GA4: https://analytics.google.com/
- [ ] Obtener Measurement ID (G-XXXXXXXXXX)
- [ ] Añadir a `/src/config/analytics.ts`
- [ ] Instalar tracking en BaseLayout.astro

### GOOGLE TAG MANAGER (GTM)
- [ ] Crear cuenta GTM: https://tagmanager.google.com/
- [ ] Obtener Container ID (GTM-XXXXXXX)
- [ ] Añadir a `/src/config/analytics.ts`
- [ ] Instalar GTM en BaseLayout.astro

### GOOGLE SEARCH CONSOLE (GSC)
- [ ] Verificar propiedad: https://search.google.com/search-console
- [ ] Añadir meta tag de verificación
- [ ] Submit sitemap
- [ ] Indexar páginas críticas

### GOOGLE BUSINESS PROFILE (GBP)
- [ ] Crear/optar GB Profile: https://business.google.com/
- [ ] Verificar ubicación (tarjeta postal o video)
- [ ] Completar: NAP (Nombre, Dirección, Teléfono)
- [ ] Horarios, descripción, fotos, servicios
- [ ] Obtener y añadir número de WhatsApp (+573...)
- [ ] Enlazar sitio web

### LOCAL SEO CITATIONS
- [ ] Google Maps (ya con GBP)
- [ ] Facebook Business Page
- [ ] Instagram Business
- [ ] Directorios locales (Directorio Colombia, etc.)
- [ ] Páginas Amarillas (opcional)

### RANK & RENT MONETIZACIÓN
- [ ] Cliente real o cliente ficticio (si es R&R)
- [ ] Página de contacto funcional
- [ ] Sistema de lead capture (formularios funcionales)
- [ ] WhatsApp botón funcional
- [ ] Call tracking (si aplica)

### MONITOREO
- [ ] Uptime monitoring
- [ ] SSL certificate monitoring
- [ ] Google Analytics dashboard
- [ ] Search Console alerts
- [ ] Rank tracking (keyword rankings)

---

## 📋 MARC GARCÍA CHECKLIST ADICIONAL

### FASE 1: ESTRUCTURA
- [x] Silo architecture (Services, Blog, About)
- [x] Location pages (Barranquilla, Atlántico)
- [x] Service pages (Balcones, Ventanas, Terrazas)
- [ ] Location-based keywords optimizados

### FASE 2: CONTENIDO
- [x] Pillar content (3 artículos blog)
- [ ] Cluster content (más artículos)
- [ ] Location-based content (páginas por zona)
- [ ] Service-specific content (guías detalladas)

### FASE 3: OFF-PAGE
- [ ] Local backlinks (directorios, asociaciones)
- [ ] Guest posts en sitios locales
- [ ] Citations NAP consistentes
- [ ] Reviews solicitados (Google, Facebook)

### FASE 4: CONVERSIÓN
- [x] Lead forms funcionales
- [x] WhatsApp CTA
- [ ] Call tracking
- [ ] Lead nurturing (GestionaLeads opcional)

### FASE 5: ESCALADO
- [ ] Automatización de leads
- [ ] Reporting automático
- [ ] Outreach automático
- [ ] Contratos plantillas

---

## 🚀 ACCIONES INMEDIATAS PARA SERGIO

1. **Configurar Cloudflare SSL**
   - Ir a Cloudflare Dashboard → mallas-barranquilla.com
   - SSL/TLS → Set to "Full (Strict)"
   - Edge Certificates → Always Use HTTPS: ON

2. **Google Analytics**
   - Crear propiedad en: https://analytics.google.com/
   - Obtener G-XXXXXXXXXX ID
   - Editar `/src/config/analytics.ts`

3. **Google Tag Manager**
   - Crear container en: https://tagmanager.google.com/
   - Obtener GTM-XXXXXXX ID
   - Editar `/src/config/analytics.ts`

4. **Google Search Console**
   - Verificar dominio en: https://search.google.com/search-console
   - Añadir meta tag de verificación a BaseLayout
   - Submit sitemap

5. **Google Business Profile**
   - Crear/optar: https://business.google.com/
   - Verificar con tarjeta postal o video
   - Completar NAP completo

6. **Deploy Cloudflare Pages**
   - Conectar GitHub repo a Cloudflare Pages
   - Build command: `npm run build`
   - Output directory: `dist`
   - O: Deploy manual de `/opt/data/projects/maprotec/dist`

---

## 📞 CONTACTO / CTA

- [ ] Número de WhatsApp real: +57300...
- [ ] Dirección física (opcional si es R&R)
- [ ] Email: info@mallas-barranquilla.com (ya en sitio)

---

## 🔗 LINKS ÚTILES

- Cloudflare Dashboard: https://dash.cloudflare.com/
- Google Analytics: https://analytics.google.com/
- Google Tag Manager: https://tagmanager.google.com/
- Google Search Console: https://search.google.com/search-console
- Google Business Profile: https://business.google.com/
- GBP Guidelines: https://support.google.com/business/answer/3038177

---

**NOTA:** El código está listo en GitHub. Deploy automático se activa cuando conectes Cloudflare Pages al repo `aldanasoy/maprotec`.