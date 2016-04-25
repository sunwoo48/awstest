(function(){
  'use strict'

      angular
        .module('photo')
        .controller('mainctrl', mainctrl);

  function mainctrl($state) {
    var ctrl = this;
    ctrl.reopen = reopen;
    ctrl.$state = $state;


if (document.referrer == "http://localhost:8080/#/main") {
  window.location.reload(); 

} 



    function reopen() {
        ctrl.$state.go('main');
        location.reload();
    }
    
  }
})();








  // ctrl.addSlide =addSlide;
  // ctrl.randomize = randomize;



  // ctrl.active = 0;
  // var slides = ctrl.slides = [];
  // var currIndex = 0;

  //  function addSlide() {
  //   var newWidth = 400 + slides.length + 1;
  //   slides.push({
  //     image: 'http://lorempixel.com/' + newWidth + '/150',
  //   });
  // };

  // function randomize() {
  //   var indexes = ctrl.generateIndexesArray();
  //   ctrl.assignNewIndexesToSlides(indexes);
  // };

  // for (var i = 0; i < 3; i++) {
  //   ctrl.addSlide();
  // }