import angular from 'angular'
import uirouter from 'angular-ui-router'
import config from './config'
import './base.scss'
import list from './list'


angular
  .module('pokedex', [
    uirouter,
    list
  ])
  .config(config)
