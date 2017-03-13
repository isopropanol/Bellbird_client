'use strict';

angular.module('frontendClientApp')
.factory('Alarm', [function() {
  function Alarm(params) {
          this.description = params.description;
  }

  return Alarm;
}]);
