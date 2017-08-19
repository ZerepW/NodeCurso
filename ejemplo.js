const csv = require('fast-csv');
const express = require('express');
const app = express();
const path = require('path');



app.get('/', (req, res)=>{
    //Verque pais mandó el usuario
    let paisTmp = req.query.pais;

    if(!paisTmp){
        res.send('No se mando país a buscar');
    }
 
    //Buscar el paisen el CSV
    let q = csv.fromPath('./monedas.csv');
    let paisEncontrado;

    q.on('data', (data)=>{
        if(data[0] == paisTmp){
            //Enviar la moneda y el nombre
            paisEncontrado = data;
        } 
    });

    q.on('end', ()=>{
        if(paisEncontrado){
            res.send(`El pais fue ${paisTmp}: Su moneda es el ${paisEncontrado}(${paisEncontrado})`);
        }else{
            res.sendFile(path.join(`${__dirname}/indexExpress.html`));
            //res.send(`No se encontró el país ${paisTmp}`);
        };
    }); 
});

app.listen(8888);