router.$inject = ['$stateProvider']

export default function router($stateProvider) {
  $stateProvider
    .state('list', {
      url: '/',
      template: require('./list.html'),
      controller: 'list.controller as list'
    })
}
