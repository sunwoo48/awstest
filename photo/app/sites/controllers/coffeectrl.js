

(function(){
  'use strict'

      angular
        .module('photo')
        .controller('coffeectrl', coffeectrl);

  function coffeectrl($location,$http, $routeParams) {
    var ctrl = this;
	ctrl.$location = $location;
	ctrl.$http = $http
	ctrl.$routeParams = $routeParams;

	ctrl.getShops = getShops;
	ctrl.getShops();
	ctrl.shoplist = ctrl.getShops();

	ctrl.getbyId = getbyId;
	ctrl.deleteShop = deleteShop;
	ctrl.gotoEdit = gotoEdit;
	ctrl.addShop = addShop;
	ctrl.editshop = editshop;

	if($routeParams.shopId){
		ctrl.$http.get('http://localhost:8080/'+$routeParams.shopId)
		.then(function(res) {
			ctrl.shop = res.data;
		})
	}


      function getShops() {
        ctrl.$http.get('http://localhost:8080/shop')
        .then(function(res){
		console.log(res.data);
			ctrl.shoplist = res.data;
		})
      };

	function getbyId(cat) {
		ctrl.$http.get('http://localhost:8080/' + cat)
		.then(function(res){
			console.log(res.data);
			ctrl.$location.path('shop/' + cat)
		})
	}
	  //-----add new shop------
	function addShop() {
		var ctrl = this;
	   	var newshop = {
	  		name: ctrl.name,
	  		address: ctrl.address,
	  		rating: ctrl.rating,
	  	}
	  	console.log(newshop);
	  	ctrl.$http.post('http://localhost:8080/shop', newshop)
	  	.then(function(res) {
	  		console.log(res.data);
	  		// ctrl.shoplist.push(newshop);
	  		ctrl.getShops();
	  	})	
	  }

	//-----Delete shops by id---------

	function deleteShop (id){
		var ctrl =this;
		ctrl.$http.delete('http://localhost:8080/' + id)
			.then(function(res){
				console.log(res.data);
				ctrl.getShops();
			})
		}

	//----Edit Shop by Id -------------
	function gotoEdit (id){
		var ctrl = this;
			// ctrl.$http.get('http://localhost:8080/' + id)
			// .then(function(res){
			// 	console.log(res.data);
				ctrl.$location.path('edit/' + id)
			// })
	}

	function editshop (){
		var ctrl =this;
	   	var editshop = {
	  		name: ctrl.shop.name,
	  		address: ctrl.shop.address,
	  		rating: ctrl.shop.rating,
	  		id: ctrl.shop._id
	  	}

		ctrl.$http.put('http://localhost:8080/shop', editshop)
			.then(function(res){
				console.log(res.data);
				ctrl.shop = res.data;	
				ctrl.$location.path('/home');
			});
	}


  }
})();


// app.controller('coffeectrl', coffeectrl);

// function coffeectrl($location, $http, $routeParams) {
// 	var ctrl = this;
// 	ctrl.$location = $location;
// 	ctrl.$http = $http;
// 	ctrl.shoplist = ctrl.getShops();
// 	// ctrl.custom1 = false;
// 	// ctrl.custom2 = false;
// 	ctrl.$routeParams = $routeParams;

// 	if($routeParams.shopId){
// 		ctrl.$http.get('http://localhost:8080/'+$routeParams.shopId)
// 		.then(function(res) {
// 			ctrl.shop = res.data;
// 		})
// 	}



// };

// //----------view all shops----------
// coffeectrl.prototype.getShops = function(){
// 	var ctrl = this;
// 		ctrl.$http.get('http://localhost:8080/shop')
// 		.then(function(res){
// 			console.log(res.data);
// 			ctrl.shoplist = res.data;
// 		})
// 		// console.log("!?")
// 	}

// //---------view shop by Id--------------

// coffeectrl.prototype.getbyId = function(cat){
// 	var ctrl = this;
// 		ctrl.$http.get('http://localhost:8080/' + cat)
// 		.then(function(res){
// 			console.log(res.data);
// 			ctrl.$location.path('shop/' + cat)
// 		})
// 	}


//   //-----add new shop------
// coffeectrl.prototype.addShop = function() {
// 	var ctrl = this;
//    	var newshop = {
//   		name: ctrl.name,
//   		address: ctrl.address,
//   		rating: ctrl.rating,
//   	}
//   	console.log(newshop);
//   	ctrl.$http.post('http://localhost:8080/shop', newshop)
//   	.then(function(res) {
//   		console.log(res.data);
//   		// ctrl.shoplist.push(newshop);
//   		ctrl.getShops();
//   	})	
//   }

// //-----Delete shops by id---------

// coffeectrl.prototype.delete = function(id){
// 	var ctrl =this;
// 	ctrl.$http.delete('http://localhost:8080/' + id)
// 		.then(function(res){
// 			console.log(res.data);
// 			ctrl.getShops();
// 		})
// 	}

// //----Edit Shop by Id -------------
// coffeectrl.prototype.gotoEdit = function(id){
// 	var ctrl = this;
// 		// ctrl.$http.get('http://localhost:8080/' + id)
// 		// .then(function(res){
// 		// 	console.log(res.data);
// 			ctrl.$location.path('edit/' + id)
// 		// })
// }

// coffeectrl.prototype.editshop = function(){
// 	var ctrl =this;
//    	var editshop = {
//   		name: ctrl.shop.name,
//   		address: ctrl.shop.address,
//   		rating: ctrl.shop.rating,
//   		id: ctrl.shop._id
//   	}

// 	ctrl.$http.put('http://localhost:8080/shop', editshop)
// 		.then(function(res){
// 			console.log(res.data);
// 			ctrl.shop = res.data;	
// 			ctrl.$location.path('/home');
// 		});
// }


