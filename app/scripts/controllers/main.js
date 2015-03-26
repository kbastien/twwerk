'use strict';

/**
 * @ngdoc function
 * @name twwerkApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twwerkApp
 */
angular.module('twwerkApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
