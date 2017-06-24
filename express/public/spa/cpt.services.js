(function() {
  'use strict'

  angular.module('cpt')
    .service('cptService', service)
  service.$inject = ['$http', '$stateParams', '$state', '$filter']

  function service($http, $stateParams, $state, $filter) {

    // let sortProjects
    // this.sort = function(sortOrder) {
    //   sortProjects = sortOrder
    //   console.log(sortProjects);
    // }
    // this.sorted = function() {
    //   console.log(sortProjects);
    //   // return sortProjects
    //   // return $http.get('/api/projects').then((all) => {
    //   //   return $filter('orderBy')(all.data, sortProjects)
    //   // }).then((sorted) => {
    //   //   return sorted
    //   // })
    // }

    this.allProjects = function() { // Grabs all projects
      return $http.get('/api/projects').then(all => all.data)
    }


    this.newProject = function(newProject) { // Makes new project
      $http.post('/api/projects', newProject)
      $state.reload();
    }

    this.$del = function(id) { // Removes Project by ID
      $http.delete(`/api/projects/${$stateParams.id}`).then(d => $state.go('cpt.all'))
    }

    this.$like = function(project, dir) { // Handles both likes and dislikes
      project.negative = false // Makes my error span pop out atcha
      dir == true ?
        $http.post(`/api/projects/${project.id}/votes`)
        .then(likes => project.vote_count = likes.data.vote_count) :
        (dir == false && project.vote_count > 0) ?
        $http.delete(`/api/projects/${project.id}/votes`)
        .then(dislikes => project.vote_count = dislikes.data.vote_count) :
        project.negative = !project.negative // makes my error pop out if they try and go past 0
    }

    this.$Project = function(id) { // Grab a project by ID
      return $http.get(`api/projects/${$stateParams.id}`).then(one => one.data)
    }

    this.edit = function(project) { // Patches current Project by ID
      $http.patch(`api/projects/${$stateParams.id}/`, project)
      $state.go('cpt.all')
    }

  }
})();
