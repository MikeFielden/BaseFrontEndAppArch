'use strict';

/*	This file serves as the kickoff point for browserify
 */

// Backbone
require('Backbone');

// Drop in replacement for usage of localstorage
Backbone.LocalStorage = require('backbone.localstorage');

//********* Global modules *************

// Bootstrap
require('../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap');

// Bootstrap-table
require('../bower_components/bootstrap-table/src/bootstrap-table');

// Notification engine
require('../bower_components/bootstrap.growl/dist/bootstrap-growl.min');

// Client-side template engine
require('../bower_components/mustache/mustache');