(function () {
	angular
		.module('httpInterceptorModule', ['auth'])
		.factory('interceptHttp', interceptHttp);

	interceptHttp.$inject = ['$window', '$location', 'authFactory'];

	function interceptHttp ($window, $location, authFactory) {
		var interceptFactory = {
			request: request,
			response: response,
			responseError: responseError
		};

		function request (config) {
			var token = authFactory.getToken();

			if (token)
				config.headers['Authorization'] = 'JWT ' + token;

			return config;
		}

		function response (res) {
			console.warn(res);
			return res;
		}

		function responseError (res) {
			if (res.status == 401 || res.status == 403) {
				toastr.error(res.data.message);
				authFactory.removeToken();
				$location.path('/');
			}

			return res;
		}

		return interceptFactory;
	}
})();