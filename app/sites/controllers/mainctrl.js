  (function(){
  'use strict'

      angular
        .module('photo')
        .controller('mainctrl', mainctrl);

  function mainctrl($timeout, $mdSidenav, $log) {

    var ctrl = this;
  
  ctrl.categories = [
		{label:'Portrait',value:'Portrait'},
		{label:'Landscape',value:'Landscape'},
		{label:'Wedding',value:'Wedding'},
	];
	ctrl.category='';


  }
})();




