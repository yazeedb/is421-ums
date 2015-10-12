(function () {
	angular
		.module('login')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginService'];

	function loginCtrl ($scope, loginService) {
		$scope.formData = {};

		$scope.login = login;

		function login () {
			console.log('logging in');
			loginService.login($scope.formData)
				.then(function (res) {
					console.log(res);
				});
		}
	}
}());