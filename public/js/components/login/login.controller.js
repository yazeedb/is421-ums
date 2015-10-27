(function () {
	angular
		.module('login')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginService', '$state', 'authFactory'];

	function loginCtrl ($scope, loginService, $state, authFactory) {
		$scope.formData = {};
		$scope.login = login;

		function login () {
			loginService.login($scope.formData)
				.then(function (res) {
					if (res.status === 200) {
						authFactory.setToken(res.data.token);
						$state.go('manage');
					}
				});
		}
	}
}());