'use strict';
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'tumaricami@gmail.com',
        pass: 'Leyner10!!!'
    }
});

module.exports=transporter;