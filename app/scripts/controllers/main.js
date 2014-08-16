'use strict';

/**
 * @ngdoc function
 * @name generatorAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the generatorAngularApp
 */
angular.module('generatorAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
