# VELORA — Beauty Studio + Business OS

Demostración comercial interactiva para centros de estética no médica. Abrir index.html o servir con python -m http.server 8000. GitHub Pages puede publicar main desde la raíz.

## Funciones
Catálogo filtrable, reserva por tratamiento y profesional, horarios con duración y detección local de solapamientos, consulta y cancelación mediante código, panel con agenda, estados, métricas, clientes, edición de tarifas y horarios, exportación CSV y datos ficticios de prueba. Club de membresía únicamente ilustrativo.

## Límites
Prototipo local, no SaaS listo para producción. No introducir datos reales. Sin autenticación, API, base de datos compartida, correos, WhatsApp, cobros ni suscripciones. La disponibilidad solo se comprueba en el navegador actual; no es transaccional. Imágenes remotas de Unsplash sin verificación visual. No se han ejecutado pruebas de navegador.

## Paso a producción
Backend con PostgreSQL, aislamiento por centro, autenticación y autorización por rol, reserva transaccional con exclusión de intervalos, auditoría, protección antispam, notificaciones y pagos mediante proveedores configurados, políticas de privacidad y conservación de datos, copias de seguridad y pruebas E2E. Evitar historias clínicas o datos sanitarios. Personalizar marca y fotografías por centro.

## Modelo comercial orientativo
Alta y personalización 1500–3000 EUR; suscripción 99–249 EUR/mes según alcance, soporte y costes de proveedores. Validar disposición de pago antes de construir todas las integraciones.

La rama reformas conserva ÁUREA Studio.
