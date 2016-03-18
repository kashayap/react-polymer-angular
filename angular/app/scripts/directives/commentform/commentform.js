'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:commentForm
 * @description
 * # commentForm
 */
angular.module('commentForm', [])
  .directive('commentForm', function () {
    return {
      template: '<span id = "timestamp" ng-model="comment.timestamp">{{getDatetime()}}</span>' +
	  '<form class="commentForm" name="form">' +
                  '<input type="text" placeholder="Your name" ng-model="comment.author" name="author"/>' +
                  '<input type="text" placeholder="Say something..." ng-model="comment.msg" name="msg"/>' +
                  '<input type="submit" value="Post" ng-click="submitComment()"/>' +
                '</form>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.comment = {};
        scope.submitComment = function(){
          var comment = scope.comment;
		  comment.timestamp = document.getElementById('timestamp').innerHTML;
          if (!comment.msg || !comment.author) {
            return;
          }
          scope.$emit('submitted', comment);
          scope.comment = {};
        }
		
		scope.getDatetime = function() {
		return (new Date);
		};
      }
    };
  });
