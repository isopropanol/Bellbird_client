'use strict';

angular.module('frontendClientApp')
.service('AlarmService', ['$http','$q', 'Alarm', 'Upvote', function($http, $q, Alarm, Upvote) {
  var baseUrl = "/api/alarms/";
  var alarms = [];

  var alarmService = {

    get: function(id){
      var url = id ? baseUrl + id : baseUrl;
      return $q(function(resolve,reject){
        $http({method:"GET", url:url}).then(function(response){

          alarms = _.map(response.data,function (data) {
            return new Alarm(data);
          })
          resolve(alarms);
        });
      })
    },

    post: function (alarm) {
      var params = alarm;
      return $q(function(resolve,reject){
        $http({method:"POST", url:baseUrl, data:{alarm:params}}).then(function(response){

          alarms.unshift(new Alarm(response.data));
          resolve(alarms);
        });
      })
    },

    upvote: function (alarm) {
      var url = "/api/upvotes/";
      var params = {alarm_id:alarm.id};
      return $q(function(resolve,reject){
        $http({method:"POST", url:url, data:params}).then(function(response){

          alarm.upvotes.push(new Upvote(response.data));
          resolve(alarm);
        });
      })
    }

  }

  return alarmService;

}]);
