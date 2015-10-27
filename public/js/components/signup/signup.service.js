(function () {
	angular
		.module('signup')
		.factory('signupService', signupService);

	signupService.$inject = ['$http'];

	function signupService ($http) {
		var factory = {
			signup: signup
		};

		function signup (form) {
			console.log('dog');
			console.log(form);
			//return $http.post('/api/auth', form);
		}

		return factory;
	}
}());