(function() {
  'use strict'

  angular.module('cpt')
    .component('projects', {
      templateUrl: '/projects.component.html',
      controller: projectsController,
    })

  projectsController.$inject = ['cptService']

  function projectsController(cptService) {
    const vm = this
    // vm.$onInit = onInit
    // vm.likes = likes
    // // vm.sort = sort
    // vm.sortProjects = sortProjects

    // function onInit() {
    //   bService.allProjects() // Grabs all Projects
    //     .then((all) => {
    //       vm.projects = all
    //     })
    // }

    // function sortProjects() {
    //   bService.sorted()
    //   //     .then((all) => {
    //   //       return all
    //   //     })
    // }

    // function sort() { // WORKS BUT YOU HAVE TO CLICK IT
    //   bService.sorted()
    //   .then((all) => {
    //     vm.projects = all
    //   })
    // }

    //
    // function likes(project, dir) {
    //   bService.$like(project, dir) // Like functionality
    // }

  } // END CONTROLLER
}());
