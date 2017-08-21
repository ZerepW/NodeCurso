var express = require("express");

var app = express();

app.set('view engine','pug');

app.get("/",function(req,res){
    res.render('index',{nombre: 'Luis'}); //manda y cierra la conexion
});

app.listen(7780);   