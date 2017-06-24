(function() {
  'use strict'

  angular.module('cpt')
    .component('home', {
      templateUrl: 'home.component.html',
      controller: homeController,
    })

  homeController.$inject = ['cptService']

  function homeController(cptService) {
    const vm = this
    vm.$onInit = onInit
    // vm.likes = likes
    // // vm.sort = sort
    // vm.sortProjects = sortProjects

    function onInit() {
      // bService.allProjects() // Grabs all Projects
      //   .then((all) => {
      //     vm.home = all
      //   })
    }

    // function sortProjects() {
    //   bService.sorted()
    //   //     .then((all) => {
    //   //       return all
    //   //     })
    // }

    // function sort() { // WORKS BUT YOU HAVE TO CLICK IT
    //   bService.sorted()
    //   .then((all) => {
    //     vm.home = all
    //   })
    // }


    // function likes(project, dir) {
    //   bService.$like(project, dir) // Like functionality
    // }

  } // END CONTROLLER
}());
