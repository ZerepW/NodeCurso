var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    fs.readFile("./index.html",function(err,data){
        var htmlString = data.toString(); //convierte el archivo html a string

        var variables = htmlString.match(/[^\{\}]+(?=\})/g); // Hace match con las coincidencias entre llaves
        var nombre = "Luis Arturo";
        var matricula = "A01273687";
        //variables = ['nombre']
        for (var i = variables.length - 1; i>=0; i--){
            var value = eval(variables[i]);//ejecuta texto como codigo JS
            htmlString = htmlString.replace("{"+variables[i]+"}",value) //reemplaza con el valor de la variable
        };

        res.writeHead(200,{"Content-type":"text/html"});
        res.write(htmlString);
        res.end();
    });
    console.log("Render de Variables");
}).listen(7779);