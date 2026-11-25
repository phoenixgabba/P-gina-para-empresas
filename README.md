# FORMA — Creative Production Studio

Web editorial y prototipo interactivo de gestión para estudios de escaparatismo, escenografía, fabricación artesanal y producción creativa. Marca ficticia. Servir con `python -m http.server 8000` o GitHub Pages desde main.

## Recorrido
1. Explorar archivo conceptual filtrable y crear brief de proyecto en tres pasos.
2. En Production OS (pie de página), abrir proyectos o cargar ejemplos desde Configuración.
3. Abrir un proyecto, introducir concepto y presupuesto, avanzar a Presupuesto.
4. Volver al área cliente con código y correo ficticio; aprobar o solicitar revisión.
5. Gestionar tareas, hitos, gastos, horas, consumo de materiales y fases hasta entrega/desmontaje.
6. Seleccionar objetos y fechas de alquiler, solicitar y confirmar desde administración; registrar entrega y devolución.

## Módulos
Resumen, CRM, pipeline, calendario de fechas, tareas/equipo, presupuestos, taller/materiales, alquileres, catálogo, clientes, costes y márgenes parciales, configuración. Exportación CSV y resúmenes de texto.

## Límites
Demo local, sin autenticación, base de datos compartida, pagos, correo, subida de archivos, render 3D, firma electrónica ni facturación fiscal. No usar datos reales. Las imágenes externas son referencias conceptuales no verificadas visualmente. No se han ejecutado pruebas de navegador. Las reservas de alquiler solo se controlan en este navegador y no son transaccionales. El calendario es una lista cronológica, no una agenda de cuadrícula. Los costes son parciales y no constituyen contabilidad.

## Producción
API y PostgreSQL con aislamiento por estudio, permisos por rol, almacenamiento privado de referencias y archivos, versionado inmutable de propuestas, aceptación trazable, control transaccional de stock y fechas, notificaciones, facturación e integraciones de pago, auditoría y copias. Validar con estudios reales antes de comercializar.

## Ramas
reformas — ÁUREA; estetica — VELORA; mecánica — MOTIV; main — FORMA.

## Visual edition 02
Assets versionados para evitar colisiones de caché con otras ramas. Portada con composición SVG integrada, sin fotografía remota. El resto de las referencias fotográficas siguen siendo externas.

## Fase 1 — arquitectura pública
Home con selector de universos, páginas retail.html, sets.html y atelier.html, navegación móvil, estilos específicos por universo. studio.html conserva la demo operativa previa y admite enlaces ?brief=, ?portal=1 y ?admin=1. Las imágenes son referencias externas, no trabajos reales. Fases 2 y 3 pendientes de aprobación. No se han realizado pruebas de navegador.

## Fase 1 / revisión 4
Mesa de trabajo como inicio, índice global y dock persistente. Tres laboratorios con ilustraciones SVG originales e interacciones de paleta, encuadre, luz y anotaciones. No son renders fotorrealistas ni 3D navegable. Se conserva studio.html y sus recursos. Fases 2 y 3 no iniciadas.

## Fase 1 / edición cinematográfica 5
Nueva portada fotográfica, tres disciplinas, índice global, navegación por teclado, estilos adaptables. Imágenes externas de referencia (créditos visibles), no portfolio real ni generación original. Las fuentes se localizaron en Unsplash; no se verificó su renderizado. Se conserva studio.html y la gestión anterior. Fases 2 y 3 pendientes.
