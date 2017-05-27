'use strict'
var express = require('express');
var EmailController = require("../Controller/EmailController");
var api = express.Router();
var path = require('path'); //[4]

//METODOS RUTAS
api.post('/sendMail',EmailController.EnvioCorreo);

api.get('/', function(req, res) { //[8]
	
	     res.sendFile(path.join(__dirname + '/Home/index.html')); //[9]
	     res.status(200).send({status:"API RUNNING",
	     						Fecha: EmailController.fecha()
	 });    
});




module.exports = api;