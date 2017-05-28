'use strict'

var app = require('./app.js'); //[1]
var port = process.env.PORT || 8080; //[2]

app.listen(port, function(){ //[3]
	console.log("Api arriba en port: localhost:"+port); //[4]
});

/*
::Tabla de Comentarios::

[1] : Importacion del Modulo App
[2] : Definicion del Puerto para el Servidor
[3] : Ponemos el servidor en modo Escucha
[4] : Obtencion de la ruta pach del Directorio de Trabajo

*/