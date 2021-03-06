import angular from 'angular';
import cowsay from './cowsay';
// for each controller...
// 1) add an import here

// create a new module "bucket" to put controllers into
// [] means this is a "set" not a "get"
const controllers = angular.module('controllers', []);

// add the controllers to this app
controllers.controller('cowsay', cowsay);
// and 2) create the controller here:

// export the module
export default controllers.name;

