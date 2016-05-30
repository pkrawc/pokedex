import angular from 'angular'
import uirouter from 'angular-ui-router'
import config from './config'
import base from './base'
import list from './list'

angular
  .module('pokedex', [
    uirouter,
    base,
    list
  ])
  .config(config)
