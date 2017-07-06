'use strict';

/**
 * @ngdoc function
 * @name rheticus.service:ProcessingService
 * @description
 * # ProcessingService
 * Processing Service for rheticus project
 */
angular.module('rheticus')
	.factory('ProcessingService',['$http','$rootScope',
		function($http,$rootScope){
			var service = {};

			let url = $rootScope.configurationCurrentHost.rheticusAPI.host+$rootScope.configurationCurrentHost.rheticusAPI.addProcessing;

			service.addProcessing = function(processingParams){

				var postObj = processingParams;

				console.log(postObj);
				var config = {
						headers : {
							'Content-Type': 'application/json;'
						}
				};

				return $http.post(url, postObj, config);

			};


			return service;
		}])