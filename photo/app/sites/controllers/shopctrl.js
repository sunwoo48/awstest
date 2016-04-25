app.controller('shopctrl', shopctrl);

function shopctrl($location, $http, $routeParams) {
	var ctrl = this;
	ctrl.$location = $location;
	ctrl.$http = $http;
	ctrl.shopbyId = ctrl.getbyId;
	ctrl.$routeParams = $routeParams;

	ctrl.$http.get('http://localhost:8080/'+$routeParams.shopId)
	.then(function(res) {
		ctrl.shop = res.data;
	})

  };