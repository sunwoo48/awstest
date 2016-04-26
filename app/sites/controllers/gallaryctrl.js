  (function(){
  'use strict'

      angular
        .module('photo')
        .controller('gallaryctrl', gallaryctrl);

  function gallaryctrl($timeout, $mdSidenav, $log) {

    var ctrl = this;
  
  ctrl.categories = [
		{label:'Portrait',value:'Portrait'},
		{label:'Landscape',value:'Landscape'},
		{label:'Wedding',value:'Wedding'},
	];
	ctrl.category='';


  }
})();




