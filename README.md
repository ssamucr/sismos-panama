# Sismos de Panamá

App web estática (un solo `index.html`) que consulta directamente la API pública de USGS
(`fdsnws/event/1/query`, con CORS abierto) y se actualiza sola cada 5 minutos.

- Ejecutar: `npm start` → http://localhost:3000
- Desplegar: subir la carpeta a cualquier hosting estático (Vercel, Netlify, GitHub Pages…).
- Configuración (epicentro, radio de 400 km, magnitud mínima, intervalo): objeto `CONFIG` en `index.html`.
- Límites: Natural Earth (Panamá Oeste aparece dentro de Panamá); ciudades con coordenadas aproximadas.
