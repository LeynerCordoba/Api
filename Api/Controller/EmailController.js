'use strict'
function EnvioCorreo(req,res){
	let transporter = require("../Model/Email");
	var Origen = req.body.emisor;
	var Destino = req.body.receptor;
	var Asunto = req.body.asunto;
	var body = req.body.body;
	var html = req.body.html;

var mailOptions = {
    from: Origen, // sender address
    to: Destino, // list of receivers
    subject: Asunto, // Subject line
    text: body, // plain text body
    html: html // html body
};


//console.log(Origen+"\n"+Destino+"\n"+Asunto+"\n");
transporter.sendMail(mailOptions, (error, info) => {

    if (error) {

        res.status(400).send(error);
        return console.log(error);
        
    }else{
    	console.log('Menssaje %s Enviado: %s', info.messageId, info.response);
	    res.status(200).jsonp(req.body).send({
	    	data:[Origen,Destino,Asunto],
	    	message: "Correo Enviado Correctamente"
	    });	

    }
    
});

 }


function fecha (){
     var hoy = new Date();
	 var dd = hoy.getDate();
	 var mm = hoy.getMonth()+1; //hoy es 0!
	 var yyyy = hoy.getFullYear();
	 var hor = hoy.getHours();
	 var min = hoy.getMinutes();
	 var sec = hoy.getSeconds(); 
	if(dd<10) {
	    dd='0'+dd
	}else if(mm<10) {
	    mm='0'+mm
	} 
	hoy = dd+'/'+mm+'/'+yyyy+' - '+hor+':'+min+':'+sec;
	return hoy;
}



module.exports = {
	EnvioCorreo,
	fecha
}
