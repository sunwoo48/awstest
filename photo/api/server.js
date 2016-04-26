//
try{
    var env = require('./config/env_dev');
}
catch(err){
    var env = require('./config/env_prod');
}

var express = require ('express');
var request = require ('request');

var bodyParser = require("body-parser");

var app=express();

var photo = require('./models/photo');
// var shopRoute = require('./routes/shopRoute');


app.use(bodyParser.json());
app.use(express.static(__dirname + './../app/'));




app.listen(env.port,function(){
    console.log('Listenting on '+env.host+':'+env.port);
    console.log('Stop server with CTRL + C');
})

