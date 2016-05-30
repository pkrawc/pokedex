import angular from 'angular'

function pokeList() {
  function linkFunction(scope, elem, attrs) {}
  return {
    restrict: 'E',
    replace: true,
    scope: false,
    template: require('./template.html'),
    link: linkFunction
  }
}

export default angular
  .module('poke.list', [])
  .directive('pokeList', pokeList)
  .name
