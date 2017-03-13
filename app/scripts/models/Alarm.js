'use strict';

angular.module('frontendClientApp')
.factory('Alarm', ['Upvote',function(Upvote) {
  function Alarm(params) {
          this.id = params.id;
          this.description = params.description;
          this.upvotes = [];
          var that = this;
          _.each(params.upvotes, function(upvotedata){
            that.upvotes.push(new Upvote(upvotedata))
          });
  }

  return Alarm;
}]);
