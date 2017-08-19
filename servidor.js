var http = require('http'); //MODULO HTTP
var fs = require('fs'); // MODULO FInLE SYSTEM

fs.readFileSync("./index.html");

// req = solicitud del usuario
// res = respuesta del servidor
// Se ejecuta la funcion cada vez que el navegador hace la peticion
// Se pueden crear N servidores en distintos puertos

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!'); //Cierra la conexion de la peticion
    console.log("Funciona el servidor");
}).listen(7777);
