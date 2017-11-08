(function () {
	'use strict';


	var factory = {};

	app.factory('myServices', ['$http', '$q', function ($http, $q) {
		// var baseUrl = _spPageContextInfo.webAbsoluteUrl;

		factory.getRequest = function (query) {

			var deferred = $q.defer();
			$http({
					url: query,
					method: "GET",
					headers: {
						"accept": "application/json;odata=verbose",
						"content-Type": "application/json;odata=verbose"
					}
				})
				.then(function successCallback(response) {
						deferred.resolve(response);
					},
					function errorCallback(response) {
						deferred.reject(response);
					});
			return deferred.promise;
		}
		factory.postRequest = function (data, url) {
			var deferred = $q.defer();

			$http({
					url: url,
					method: "POST",
					headers: {
						"accept": "application/json;odata=verbose",
						"content-Type": "application/json;odata=verbose"
					},
					data: JSON.stringify(data)
				}).then(function successCallback(response) {
					deferred.resolve(response);
				},
				function errorCallback(response) {
					deferred.reject(response);
				});
			return deferred.promise;
		};
		factory.updateRequest = function (data, url) {

			var deferred = $q.defer();
			$http({
					url: url,
					method: "PATCH",
					headers: {
						"accept": "application/json;odata=verbose",
						"X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
						"content-Type": "application/json;odata=verbose",
						"X-Http-Method": "PATCH",
						"If-Match": "*"
					},
					data: JSON.stringify(data)
				})
				.success(function (result) {

					deferred.resolve(result);
				})
				.error(function (result, status) {
					deferred.reject(status);
				});
			return deferred.promise;
		};
		factory.deleteRequest = function (url) {
			var deferred = $q.defer();
			$http({
					url: /*baseUrl +*/ url,
					method: "DELETE",
					headers: {
						"accept": "application/json;odata=verbose",
						"X-RequestDigest": document.getElementById("__REQUESTDIGEST").value,
						"IF-MATCH": "*"
					}
				})
				.success(function (result) {
					deferred.resolve(result);
				})
				.error(function (result, status) {
					deferred.reject(status);
				});
			return deferred.promise;
		};
		return factory;
        }]);

})()
