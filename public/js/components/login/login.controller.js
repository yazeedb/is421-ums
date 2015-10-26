(function () {
	angular
		.module('login')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginService','$state'];

	function loginCtrl ($scope, loginService, $state) {
		$scope.formData = {};
		$scope.login = login;

		function login () {
			loginService.login($scope.formData)
				.then(function (res) {
					console.log(res);
					if (res.status === 200) {
						$state.go('manage');
					}
				});
		}
	}
}());