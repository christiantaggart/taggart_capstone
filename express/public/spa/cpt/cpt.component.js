(function() {
  'use strict'

  angular.module('cpt')
    .component('cpt', {

      templateUrl: '/cpt/cpt.component.html', // NAV BAR TEMPLATE
      controller: cptController
    })

  function cptController() {
    const vm = this
    vm.$onInit = onInit

    function onInit() {
      // vm.commentSection = false
    }
  } // END cptController
}());
