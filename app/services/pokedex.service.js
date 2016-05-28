import angular from 'angular'
import resource from 'angular-resource'

class pokedexService {
  constructor($resource) {

  }
}

pokedexService.$inject = ['$resource']

export default angular
  .module('pokedex.service', [
    resource
  ])
  .service('pokedexService', pokedexService)
  .name
