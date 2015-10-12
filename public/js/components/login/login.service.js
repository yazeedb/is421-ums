(function () {
	angular
		.module('login')
		.factory('loginService', loginService);

	loginService.$inject = ['$http'];

	function loginService ($http) {
		var factory = {
			login: login
		};

		function login (userData) {
			return $http.post('/api/auth', userData);
		}

		return factory;
	}
}());