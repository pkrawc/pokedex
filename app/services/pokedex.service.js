import angular from 'angular'
import resource from 'angular-resource'

class pokedexService {
  constructor($resource) {
    this.pokedex = $resource('http://pokeapi.co/api/v2/pokemon/', {}, {
        get: { cached: true, method: 'get' }
      })
  }
}

pokedexService.$inject = ['$resource']

export default angular
  .module('pokedex.service', [
    resource
  ])
  .service('pokedexService', pokedexService)
  .name
