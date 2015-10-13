(function () {
	angular
		.module('login')
		.controller('loginCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope', 'loginService','$state'];

	function loginCtrl ($scope, loginService, $state) {
		$scope.formData = {};

		$scope.login = login;

		function login () {
			console.log('logging in');
			loginService.login($scope.formData)
				.then(function (res) {
					console.log(res);
				});

			//redirect on login success
			$state.go('manage');
		}//end login
	}
}());