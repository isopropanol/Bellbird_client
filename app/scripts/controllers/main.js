'use strict';

/**
 * @ngdoc function
 * @name frontendClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendClientApp
 */
angular.module('frontendClientApp')
  .controller('MainCtrl', ['$scope', 'GroupService', function ($scope, GroupService) {
    GroupService.get().then(function (groups) {
      $scope.groups = groups
    });

    $scope.updateGroup = function (group) {
      group.name = group.name.toLowerCase();
      group.$save()
      // group.update({name:group.name.toLowerCase()})
    }
  }]);
