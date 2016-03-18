'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentList
 * @description
 * # commentList
 */
angular.module('commentList', ['comment'])
  .directive('commentList', function () {
    return {
      template:'<div class="commentList">' +
                  '<comment-model ng-repeat="comment in comments" author="{{comment.author}}">' +
                    '{{comment.msg}}' +'<span class="display_timestamp">{{getDatetime(comment.timestamp)}}</span>' +
                  '</comment-model>' +
                  '<span ng-if="comments.length < 1">No comments yet</span>' +
				  
                '</div>',
      restrict: 'E',
      scope: {
        comments: '='
      },
      link: function postLink(scope, element, attrs) {
		  
		scope.getDatetime = function(date1) {
		
			date1 = date1.replace(/^"(.*)"$/, '$1');
			console.log(date1+" hi");
	
			var date = new Date(date1)
		
			var seconds = Math.floor((new Date() - date) / 1000);

			var interval = Math.floor(seconds / 31536000);
			if (interval > 1) {
				return "-- " + interval + " years ago";
			}
			
			interval = Math.floor(seconds / 2592000);
			if (interval > 1) {
				return "-- " + interval + " months ago";
			}
			
			interval = Math.floor(seconds / 86400);
			console.log("days");
			console.log(interval);
			if (interval > 1) {
				return "-- " + interval + " days ago";
			}
			
			interval = Math.floor(seconds / 3600);
			if (interval > 1) {
				return "-- " + interval + " hours ago";
			}
			
			interval = Math.floor(seconds / 60);
			if (interval > 1) {
				if (interval > 60){
					return "-- 1 hour ago";
				}
				else{
					return "-- " + interval + " minutes ago";
				}
				
			}
			//return Math.floor(seconds) + " seconds ago";
			return "-- 1 minute ago";

		 }
	  }
    };
  });