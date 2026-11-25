# MOTIV — Automotive Service & Workshop OS

Demostración comercial de una plataforma para talleres y centros de automoción. Marca ficticia. Abrir index.html con un servidor estático (por ejemplo python -m http.server 8000) o GitHub Pages.

## Recorrido de prueba
1. Reserva un servicio con datos ficticios.
2. Abre Panel del taller en el pie de página. En Citas, recepciona la cita.
3. Abre la orden, avanza a Diagnóstico, añade conceptos y envía a Esperando aprobación.
4. Vuelve a la web, entra en Mi garaje con código de cita u orden y correo ficticio, autoriza presupuesto.
5. En el panel, avanza la orden, registra consumo de recambios, control de calidad y entrega. Descarga resumen de demo.
6. Configuración → Cargar ejemplos permite probar órdenes, citas y solicitudes sin crear todo a mano.

## Alcance
Catálogo editable, estimador, reserva por capacidad y duración, portal de seguimiento, aprobación/rechazo, órdenes y estados, tablero por fases, historial de vehículos, clientes, inventario y consumo, alertas de stock, solicitudes de flotas y presupuestos, informes parciales y CSV. No incluye gestión efectiva de flotas externas ni contabilidad.

## Límites
Datos de prueba en localStorage, sin autenticación ni aislamiento real, sin servidor compartido, sin transacciones concurrentes, sin facturación fiscal, sin cobros, sin correo/WhatsApp, sin gestión de archivos. No introducir datos reales. Fotos externas no verificadas. No se han ejecutado pruebas de navegador. Los precios son ilustrativos.

## Producción
API autenticada, roles de cliente/técnico/administración, aislamiento multiempresa, PostgreSQL con reservas transaccionales, trazabilidad de presupuestos versionados, stock transaccional, almacenamiento seguro, notificaciones, integración con facturación conforme a requisitos aplicables, backups y pruebas E2E. Validar demanda y competencia local antes de invertir.

## Comercialización orientativa
Implantación 2500–5000 EUR; cuota 149–349 EUR/mes según usuarios, módulos y soporte. Hipótesis no validada; no equivale a beneficio neto.

Ramas anteriores: reformas (ÁUREA), estetica (VELORA).
