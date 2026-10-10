// Servidor estático mínimo: node server.js  (puerto 3000 o PORT)
const http = require("http"), fs = require("fs"), path = require("path");
const tipos = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".json": "application/json", ".svg": "image/svg+xml" };
http.createServer((req, res) => {
  const ruta = req.url.split("?")[0] === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
  const archivo = path.join(__dirname, "public", path.normalize(ruta));
  if (!archivo.startsWith(path.join(__dirname, "public"))) { res.writeHead(403); return res.end(); }
  fs.readFile(archivo, (error, datos) => {
    if (error) { res.writeHead(404); return res.end("No encontrado"); }
    res.writeHead(200, { "Content-Type": tipos[path.extname(archivo)] || "application/octet-stream" });
    res.end(datos);
  });
}).listen(process.env.PORT || 3000, () => console.log("http://localhost:" + (process.env.PORT || 3000)));
