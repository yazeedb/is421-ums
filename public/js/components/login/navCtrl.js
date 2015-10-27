(function () {
	angular
		.module('login')
		.controller('navCtrl', navCtrl);

	navCtrl.$inject = ['$scope', '$state', 'authFactory'];

	function navCtrl ($scope, $state, authFactory) {
		$scope.loggedIn = authFactory.getToken();
		$scope.logout = logout;

		function logout () {
			authFactory.removeToken();
			$state.go('home');
			$scope.loggedIn = false;
		}
	}
}());