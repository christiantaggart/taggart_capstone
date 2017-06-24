(function() {
  'use strict'

  angular.module('cpt')
    .component('editProjects', {
      templateUrl: '/views/editProjects.template.html',
      controller: editController
    })

  editController.$inject = ['bService']

  function editController(bService) {
    const vm = this
    vm.$onInit = onInit
    vm.editProjects = editProjects
    vm.deleter = deleter

    function onInit(id) {
      bService.$Projects(id).then((editable) => { // Grabs Projects by ID
        vm.projects = editable
      })
    }

    function editProjects(projects) {
      bService.edit(vm.projects) // Patches Projects by ID
    }

    function deleter(id) {
      bService.$del(id) // Deletes Projects by ID
    }

  } // END editController
}());
