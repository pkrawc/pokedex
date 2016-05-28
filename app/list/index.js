import angular from 'angular'
import uirouter from 'angular-ui-router'
import router from './router'
import listCtrl from './list.controller'
import pokedexService from '../services/pokedex.service'
import './list.scss'

export default angular
  .module('list', [
    pokedexService
  ])
  .config(router)
  .controller('list.controller', listCtrl)
  .name
