(function() {
  'use strict'

  angular.module('cpt')
    .component('comments', {
      templateUrl: '/views/comments.template.html',
      controller: commentsController
    })

  commentsController.$inject = ['bService', 'cService']

  function commentsController(bService, cService) {
    const vm = this
    vm.$onInit = onInit
    vm.commenter = commenter
    vm.likes = likes

    function onInit(id) {
      bService.$Project(id).then(project => { // Grabs an Individual project
        vm.project = project
        cService.allComments().then(all => { // Grabs all the memes
          vm.comments = all
        })
      })
    }

    function likes(project, dir) {
      bService.$like(vm.project, dir) // Likes functionality
    }

    function commenter() {
      cService.$comment(vm.comment) // Adds a comment
    }

  } // END newCommentController
}());
