const express=require('express');
const morgan=require('morgan');
const exphbs=require('express-handlebars');
//esto es un objeto , el cual va a tener todas las caracteristicas de express
const app=express();

//par que funcione en el index se debe exportar
module.exports=app;

//setings
app.set('port',process.env.PORT || 3000); 

//midlewars

//ruotes

//static files