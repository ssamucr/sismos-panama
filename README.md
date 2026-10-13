# Sismos de Panamá

Panel web para **seguir en tiempo real una secuencia sísmica en Panamá**: un mapa con los sismos, una lista
ordenable y una gráfica de cómo evolucionan las magnitudes desde el sismo principal. Consulta directamente la API
pública de [USGS](https://earthquake.usgs.gov/fdsnws/event/1/) y se actualiza sola cada 5 minutos.

**Demo:** <https://sismos-panama.vercel.app>

## Qué muestra

- **Resumen de la secuencia**: cuántos sismos hubo desde el principal, cuál fue el mayor, cuántos fueron de M6 o más y de M5 o más, y cuánto tiempo pasó desde el último.
- **Mapa interactivo** de Panamá y alrededores con un círculo por sismo, de tamaño según su magnitud
  (M4–4.9, M5–5.9, M6–6.9, M7+). Se puede acercar, alejar, arrastrar, volver a "Panamá completo" o "Enfocar sismos".
- **Gráfica de magnitud en el tiempo** desde el sismo principal, para ver cómo decaen las réplicas.
- **Lista de sismos** con filtros (todos, M5 o más, M6 o más) y orden (más recientes, mayor magnitud, más antiguos).
- **Ficha de detalle** al seleccionar un sismo en la lista o en el mapa.
- **Estado de la sincronización** con USGS (cuándo se actualizó por última vez) y reintento automático si falla.
- **Responsive**: en móvil alterna entre las pestañas "Mapa y detalle" y "Lista".

## Cómo funciona

No tiene backend: es una página estática (`public/index.html`) que consulta la API de USGS desde el navegador
(la API permite CORS), filtra los sismos de la zona y dibuja el mapa y la gráfica con [D3](https://d3js.org).
Los límites del mapa vienen de Natural Earth y están incrustados en la página.

## Ejecutar en local

Requiere Node.js.

```bash
npm start
```

Abre <http://localhost:3000>. `server.js` es un servidor estático mínimo.

## Configuración

Todo se ajusta en el objeto `CONFIG` de `public/index.html`:

| Opción | Qué controla |
| --- | --- |
| `inicioDeLaSecuenciaIso` | Fecha y hora desde la que se buscan sismos (el sismo principal) |
| `latitudDelPrincipal`, `longitudDelPrincipal` | Epicentro de referencia |
| `radioEnKilometros` | Radio de búsqueda alrededor del epicentro (400 km) |
| `magnitudMinima` | Magnitud mínima a consultar (4) |
| `intervaloEnMilisegundos` | Cada cuánto se actualiza (5 minutos) |

## Despliegue

Basta con publicar la carpeta `public/` en cualquier hosting estático (Vercel, Netlify, GitHub Pages…).
En Vercel, `vercel.json` ya lo indica.

## Fuentes y límites

- Datos sísmicos: [USGS](https://earthquake.usgs.gov). Límites territoriales: [Natural Earth](https://www.naturalearthdata.com)
  (Panamá Oeste aparece dentro de Panamá).
- Las ciudades del mapa tienen coordenadas aproximadas.
- Es un proyecto informativo y personal; para alertas oficiales consulta a las autoridades locales.
