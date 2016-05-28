import angular from 'angular'
import uirouter from 'angular-ui-router'
import config from './config'


angular
  .module('pokedex', [
    uirouter
  ])
  .config(config)
