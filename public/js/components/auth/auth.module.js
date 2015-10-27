(function () {
	angular
		.module('auth', [])
		.factory('authFactory', authFactory);

	authFactory.$inject = ['$window', '$rootScope'];

	function authFactory ($window, $rootScope) {
		var factory = {
			getToken: getToken,
			setToken: setToken,
			removeToken: removeToken
		};

		function getToken () {
			return $window.localStorage.getItem('token');
		}

		function setToken (token) {
			if (!token)
				throw new Error('Cannot set token, no token provided');

			$window.localStorage.setItem('token', token);
		}

		function removeToken () {
			$window.localStorage.clear();
		}

		return factory;
	}
}());