// CONFIGURACIÓN GOOGLE ANALYTICS, GTM Y SEARCH CONSOLE
// ================================================
// EDITA ESTOS VALORES Y ELIMINA LOS COMENTARIOS DESEADOS

export const ANALYTICS = {
  // Google Analytics 4 (GA4)
  ga4: {
    measurementId: '',  // ← Reemplazar con tu ID: 'G-XXXXXXXXXX'
    // Ejemplo de cómo obtenerlo:
    // 1. Ir a https://analytics.google.com/
    // 2. Administrar → Crear cuenta → Crear propiedad
    // 3. Copiar Measurement ID (G-XXXXXXXXXX)
  },

  // Google Tag Manager (GTM)
  gtm: {
    containerId: '',  // ← Reemplazar con tu ID: 'GTM-XXXXXXX'
    // Ejemplo de cómo obtenerlo:
    // 1. Ir a https://tagmanager.google.com/
    // 2. Crear cuenta → Crear contenedor
    // 3. Copiar Container ID (GTM-XXXXXXX)
  },

  // Google Search Console (GSC)
  gsc: {
    verificationCode: '',  // ← Reemplazar con código de verificación
    // Opción A: Meta tag (recomendado)
    // <meta name="google-site-verification" content="XXXXXXXXXXXX" />
    //
    // Opción B: DNS TXT (Cloudflare)
    // Nombre: @ o mallas-barranquilla.com
    // Tipo: TXT
    // Valor: google-site-verification=XXXXXXXXXXXX
  }
};

// Google Business Profile (GBP) - Local SEO
export const GBP = {
  name: 'Mayprotec',
  phone: '',           // ← Reemplazar: '+573001234567'
  whatsapp: '',        // ← Reemplazar: '+573001234567'
  email: 'info@mallas-barranquilla.com',

  address: {
    streetAddress: '',     // ← Reemplazar si es Rank & Rent con dirección real
    addressLocality: 'Barranquilla',
    addressRegion: 'Atlántico',
    postalCode: '',
    addressCountry: 'CO'
  },

  coordinates: {
    latitude: 10.9685,
    longitude: -74.7813
  },

  hours: {
    weekday: '08:00-18:00',
    saturday: '08:00-13:00',
    sunday: 'Cerrado'
  }
};

// Event Tracking (CTA buttons, forms, etc.)
export const EVENTS = {
  whatsapp: {
    category: 'Contact',
    action: 'Click WhatsApp',
    label: 'Floating Button'
  },
  contactForm: {
    category: 'Lead',
    action: 'Form Submit',
    label: 'Contact Form'
  },
  pricing: {
    category: 'Engagement',
    action: 'Click',
    label: 'Pricing Tab'
  },
  blog: {
    category: 'Content',
    action: 'Read',
    label: 'Blog Article'
  }
};

export default ANALYTICS;