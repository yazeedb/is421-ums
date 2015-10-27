(function () {
	angular
		.module('login')
		.controller('navCtrl', navCtrl);

	navCtrl.$inject = ['$scope', '$state', 'authFactory', 'usersApi'];

	function navCtrl ($scope, $state, authFactory, usersApi) {
		var token = authFactory.getToken();
		if (token) {
			usersApi.getMe()
				.then(function (res) {
					console.log(res);
					localStorage.role = res.data.user.role;
					$scope.role = localStorage.role;
				});
		}

		$scope.loggedIn = authFactory.getToken();
		$scope.logout = logout;

		function logout () {
			authFactory.removeToken();
			$state.go('home');
			$scope.loggedIn = false;
		}
	}
}());