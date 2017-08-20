function parse(req){
    var paramHash = {};
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
    return paramHash;
}
module.exports.parse = parse;