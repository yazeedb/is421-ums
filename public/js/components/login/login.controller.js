(function () {
	angular
		.module('login')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginService', '$state', 'authFactory', 'usersApi'];

	function loginCtrl ($scope, loginService, $state, authFactory, usersApi) {
		var token = authFactory.getToken();
		if (token) {
			usersApi.getMe()
				.then(function (res) {
					if (res.data.success) {
						$state.go('profilePage.user', {username: res.data.user.username});
					}
				});
		}

		$scope.formData = {};
		$scope.login = login;

		function login () {
			loginService.login($scope.formData)
				.then(function (res) {
					if (res.status === 200) {
						authFactory.setToken(res.data.token);

						$state.go('profilePage.user', {username: $scope.formData.username});
					}
				});
		}
	}
}());