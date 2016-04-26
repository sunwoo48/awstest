(function(){
  'use strict'

      angular
        .module('photo')
        .controller('aboutctrl', aboutctrl);


function aboutctrl($timeout, $mdSidenav, $mdComponentRegistry, $log) {

      // Option #1
      


      var ctrl = this;
      ctrl.$timeout = $timeout;
      ctrl.$mdSidenav = $mdSidenav;
      ctrl.$mdComponentRegistry = $mdComponentRegistry
      ctrl.$log = $log;
      ctrl.toggle = angular.noop;
      ctrl.toggleRight = toggleRight;
      ctrl.close = close;
      ctrl.isOpen = isOpen;


      function isOpen () {
        return false
      };

      ctrl.$mdComponentRegistry
        .when('right')
        .then(function(sideNav) {

          ctrl.isOpen = angular.bind(sideNav, sideNav.isOpen);
          ctrl.toggle = angular.bind(sideNav, sideNav.toggle);

        });

      ctrl.isOpen = function(){ 
        return ctrl.$mdSidenav('right').isOpen(); 
      };

      ctrl.toggle = function() { 
        ctrl.$mdSidenav('right').toggle() 
      };


      function toggleRight() {
        ctrl.$mdSidenav('right').toggle()
          .then(function() {
            ctrl.$log.debug("toggle RIGHT is done");
          });
      };


      ctrl.close = function() {
        ctrl.$mdSidenav('right').close()
          .then(function() {
            ctrl.$log.debug("close RIGHT is done");
          });
      };


  }
})();