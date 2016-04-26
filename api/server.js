//
try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}



var express = require ('express');
var request = require ('request');
var mongoose = require('mongoose');
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




// Create instance of Mongoose and connect to our local
// MongoDB database at the directory specficied earilier.
mongoose.connect('mongodb://localhost/data/db/');

// Log to console any errors or a successful connection.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});


//---view all shops------

app.get('/shop', function(req, res){

    photo.find({}, function(err, photo) {
        if (err) {
            console.log(err);
        } else {
            console.log(photo);
            res.send(photo);
        }
    });
    console.log('running..');
    // res.send('HELLO');
});



//get specific shop
app.get('/:id', function(req, res){
    console.log('Getting Product with ID: '+req.params.id);
    photo.findById(req.params.id, function(err, shop) {
        if (err) {
            console.log(err);
        } else {
            console.log(shop);
            res.send(shop);
        }
    });
    console.log('Running Id');
});


//add new shop
app.post('/shop', function(req, res){
        //console.log(req.body);
        var newshop = photo (
            {
                name: req.body.name,
                address: req.body.address,
                rating: req.body.rating,
            }
        );
        //console.log(newshop);
        newshop.save(function (err){
            if (err) {
                console.log(err)
            } else {
                console.log('created!');
                res.json('photo');
            }
        });
});


//Delete Shop

app.delete('/:id', function(req, res) {
  photo.findByIdAndRemove(req.params.id, function (err, shop) {
      if (err) {
            console.log(err);
        } else {
            console.log(shop);
            res.send(shop);
        }
  });
});

//Edit shop

app.put('/shop', function(req, res){
    var update = 
    {
                name: req.body.name,
                address: req.body.address,
                rating: req.body.rating,
    }

var query = {"_id":req.body.id};
photo.update(query,update,{},function(err,shop){
        if(err){
            console.log(err);
        }
        else{
            console.log(shop);
            res.send('hi');
        }
    });
})



