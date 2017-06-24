(function() {
  'use strict'

  angular.module('cpt')
    .component('newProjects', {
      // templateUrl: '/views/newProjects.template.html',
      controller: newProjectsController
    })

  newProjectsController.$inject = ['bService']

  function newProjectsController(bService) {
    const vm = this
    vm.open = true
    vm.newProjects = newProjects

    function newProjects() {
      bService.newProjects(vm.project) // Makes a New Projects
    }

  } // END newProjectsController
}());
