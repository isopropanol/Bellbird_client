'use strict';

angular.module('frontendClientApp')
.factory('Upvote', [function() {
  function Upvote(params) {
          this.id = params.id;
          this.alarmId = params.alarm_id
  }

  return Upvote;
}]);
