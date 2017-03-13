'use strict';

angular.module('frontendClientApp')
.service('AlarmService', ['$http','$q', 'Alarm', function($http, $q, Alarm) {
  var baseUrl = "/api/alarms/";

  var alarmService = {

    get: function(id){
      var url = id ? baseUrl + id : baseUrl;
      return $q(function(resolve,reject){
        $http({method:"GET", url:url}).then(function(response){

          resolve(_.map(response.data,function (data) {
            return new Alarm(data);
          }))
        });
      })
    }

  }

  return alarmService;

}]);
