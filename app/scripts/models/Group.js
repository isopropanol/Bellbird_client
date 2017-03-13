'use strict';

angular.module('frontendClientApp')
.factory('Group', [function() {
  function Group(params) {
          this.name = params.name;
  }

  return Group;
}]);
