(function() {
  'use strict'

  angular.module('cpt')
    .component('navmenu', {
      templateUrl: '/navmenu.component.html',
      controller: navmenuController,
    })

  navmenuController.$inject = ['cptService', '$filter']

  function navmenuController(bService, $filter) {
    const vm = this
    // vm.form = false
    // vm.projectForm = projectForm
    // vm.sort = sort
    //
    // function projectForm() { // OPEN THE NEW project FORM
    //   vm.form = !vm.form
    // }
    //
    // function sort() {
    //   let sortOrder = vm.sortOrder
    //   bService.sort(sortOrder) // PASS IN CLIENT SPECI
    // }


  }
}());
