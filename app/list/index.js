import angular from 'angular'
import listCtrl from './list.controller'
import pokedexService from '../services/pokedex.service'
import pokeList from '../directives/pokelist'

export default angular
  .module('list', [
    pokedexService,
    pokeList
  ])
  .controller('list.controller', listCtrl)
  .name
