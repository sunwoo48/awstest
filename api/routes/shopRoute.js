// var models = require('../models');
// var express = require('express');
// var router = express.Router();

// //---view all shops------

// router.get('/shop', function(req, res){

//     CoffeeShop.find({}, function(err, coffeeShops) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(coffeeShops);
//             res.send(coffeeShops);
//         }
//     });
//     console.log('running..');
//     // res.send('HELLO');
// });



// //get specific shop
// router.get('/:id', function(req, res){
//     console.log('Getting Product with ID: '+req.params.id);
//     CoffeeShop.findById(req.params.id, function(err, shop) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(shop);
//             res.send(shop);
//         }
//     });
//     console.log('Running Id');
// });


// //add new shop
// router.post('/shop', function(req, res){
//         //console.log(req.body);
//         var newshop = CoffeeShop (
//             {
//                 name: req.body.name,
//                 address: req.body.address,
//                 rating: req.body.rating,
//             }
//         );
//         //console.log(newshop);
//         newshop.save(function (err){
//             if (err) {
//                 console.log(err)
//             } else {
//                 console.log('created!');
//                 res.json('CoffeeShop');
//             }
//         });
// });


// //Delete Shop

// router.delete('/:id', function(req, res) {
//   CoffeeShop.findByIdAndRemove(req.params.id, function (err, shop) {
//       if (err) {
//             console.log(err);
//         } else {
//             console.log(shop);
//             res.send(shop);
//         }
//   });
// });

// //Edit shop

// router.put('/shop', function(req, res){
//     var update = 
//     {
//                 name: req.body.name,
//                 address: req.body.address,
//                 rating: req.body.rating,
//     }

// var query = {"_id":req.body.id};
// CoffeeShop.update(query,update,{},function(err,shop){
//         if(err){
//             console.log(err);
//         }
//         else{
//             console.log(shop);
//             res.send('hi');
//         }
//     });




// })


// var update = {
                
//                 name: req.body.name,
//                 address: req.body.address,
//                 rating: req.body.rating,

// }

// var query = {"_id":<objectid>};
// CoffeeShop.update(query,update,{},function(err,shop){
//         if(err){
//             console.log(err);

//         }
//         else{
//             console.log(shop);
//         }
//     });





//create new shop
// var newCoffeeShop = CoffeeShop(
//     {
//         name: "help",
//         address: "50 Avenue St. East",
//         rating: 3
//     }
// );

// newCoffeeShop.save(function(err) {
//     if (err) {
//         console.log(err)
//     } else {
//         console.log('User created!');
//     }
// });
