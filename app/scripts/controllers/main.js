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
      $scope.newAlarm.isDisabled = true;
      AlarmService.post($scope.newAlarm).then(function () {
        $scope.newAlarm = {};
      },function (error) {
        if(error.status === 422){
          $scope.newAlarm.error = "Alarms must be in all CAPS";
          $scope.newAlarm.isDisabled = false;
        }
        if(error.status === 400){
          $scope.newAlarm.error = "Please provide text for an alarm";
          $scope.newAlarm.isDisabled = false;
        }
      });
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
