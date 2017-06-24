(function() {
  'use strict';
  angular.module('cpt').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'] // DEPENDENCY INJECTION INTO CONFIG
  function config($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true) // Setting clean URLs (no hashtags)
    $stateProvider // DEFINING ADDITIONAL STATES FOR Single-Page-Application
      .state({ // main state/component on every page
        name: 'cpt',
        component: 'cpt'
      })
      .state({
        name: 'cpt.all',
        url: '/',
        component: 'home'
      })
      // .state({
      //   name: 'cpt.projects',
      //   url: '/projects',
      //   component: 'projects'
      // })
      // .state({
      //   name: 'cpt.edit',
      //   url: '/projects/:id',
      //   component: 'editProject'
      // })
      // .state({
      //   name: 'cpt.comment',
      //   url: '/projects/:id/comments',
      //   component: 'comments'
      // })
  } // END CONFIG FUNCTION
}());
