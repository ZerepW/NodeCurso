//Servidor Web Sencillo
var http = require('http'); //MODULO HTTP
var fs = require('fs'); // MODULO FInLE SYSTEM

// req = solicitud del usuario
// res = respuesta del servidor
// Se ejecuta la funcion cada vez que el navegador hace la peticion
// Se pueden crear N servidores en distintos puertos
http.createServer(function (req, res) {
    // Leer archivo de manera Asincrona, 
    //recibe como parametros el Path y un callback que tiene de parametros
    //error y datos o archivo
    fs.readFile("./index.html",function(err, data){       
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(data); //Mandando respuestas al servidor
        res.end("Hola"); //Cierra la conexion de la peticion
    }); 
    console.log("Funciona el servidor");
}).listen(7777);
