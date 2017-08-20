var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){

    if(req.url.indexOf("favicon.ico")>0){
        return;
    }
  
    fs.readFile("./index.html",function(err,data){
        var htmlString = data.toString(); //convierte el archivo html a string

        var variables = htmlString.match(/[^\{\}]+(?=\})/g); // Hace match con las coincidencias entre llaves
        var paramHash = {};
        var nombre = "Invitado";
        var matricula = "123456789";
       
        if(req.url.indexOf("?")>0  ){
            // "/?nombre=Luis&data=123" => ["/","nombre=Luis&data=123"]
            var urlData = req.url.split("?");
            // "nombre=Luis&data123" => ["nombre=Luis","data=123"]
            var parametros = urlData[1].split("&");
            for(var i = parametros.length-1; i>=0;i--){
                var parametro = parametros[i]; //nombre = Luis
                var paramData = parametro.split("="); // ['nombre','Luis']
               
                paramHash[paramData[0]] = paramData[1];    //{nombre:Luis}
            }
            
           
        } 
        else{
            paramHash['nombre'] = nombre;
            paramHash['matricula'] = matricula;
        }
        //variables = ['nombre','matricula']
        for (var i = variables.length - 1; i>=0; i--){
            var value = eval(variables[i]);//ejecuta texto como codigo JS
            htmlString = htmlString.replace("{"+variables[i]+"}",paramHash[variables[i]]) //reemplaza con el valor de la variable
        };
        res.writeHead(200,{"Content-type":"text/html"});
        res.write(htmlString);
        res.end();
    });
    console.log("Render de Variables");
}).listen(7779);