import baseState from './base/state.js'
import listState from './list/state.js'

config.$inject = ['$urlRouterProvider','$locationProvider','$stateProvider']

export default function config($urlRouterProvider, $locationProvider, $stateProvider) {
  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
  $stateProvider
    .state('base', baseState)
    .state('base.list', listState)
}
