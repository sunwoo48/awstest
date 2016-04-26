  (function(){
  'use strict'

      angular
        .module('photo')
        .controller('mainctrl', mainctrl);

  function mainctrl($state) {

    var ctrl = this;
    ctrl.$state = $state;
    ctrl.gotoCoff = gotoCoff;
    ctrl.gotovinyl = gotovinyl;
  
    function gotoCoff() {
      ctrl.$state.go('coffee');

    }
    function gotovinyl() {
      ctrl.$state.go('vinyl');

    }


  }
})();




