'use strict';

/**
 * @ngdoc function
 * @name frontendClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendClientApp
 */
angular.module('frontendClientApp')
  .controller('MainCtrl', ['$scope', 'AlarmService', function ($scope, AlarmService) {
    $scope.newAlarm = {};

    AlarmService.get().then(function (alarms) {
      $scope.alarms = alarms;
    });

    $scope.addAlarm = function () {
      AlarmService.post($scope.newAlarm);
    }

    $scope.upvote = function (alarm) {
      AlarmService.upvote(alarm);
    }

    // $scope.updateGroup = function (group) {
    //   group.name = group.name.toLowerCase();
    //   group.$save()
    //   // group.update({name:group.name.toLowerCase()})
    // }
  }]);
