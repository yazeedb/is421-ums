(function () {
	angular
		.module('httpInterceptorModule', [])
		.factory('interceptHttp', interceptHttp);

	interceptHttp.$inject = ['$window', '$location'];

	function interceptHttp ($window, $location) {
		var interceptFactory = {
			request: request,
			response: response,
			responseError: responseError
		};

		function request (config) {
			/*if (token)
				config.headers['Authorization'] = 'JWT ' + token;*/

			return config;
		}

		function response (res) {
			console.warn(res);
			return res;
		}

		function responseError (res) {
			if (res.status == 401 || res.status == 403) {
				toastr.error(res.data.message);
				$location.path('/');
			}

			return res;
		}

		return interceptFactory;
	}
})();