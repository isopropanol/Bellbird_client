'use strict';

angular.module('frontendClientApp')
.service('GroupService', ['$http','$q', 'Group', function($http, $q, Group) {
  var baseUrl = "/api/groups/";

  var groupService = {

    get: function(id){
      var url = id ? baseUrl + id : baseUrl;
      return $q(function(resolve,reject){
        $http({method:"GET", url:url}).then(function(response){

          resolve(_.map(response.data,function (groupdata) {
            return new Group(groupdata);
          }))
        });
      })
    }
    
  }

  return groupService;

  // return $resource('/api/groups/:id.json', null, {
  //   'update': { method:'PUT' }
  // });
}]);
