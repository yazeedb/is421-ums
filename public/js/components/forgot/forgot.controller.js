(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state','$http'];

	function forgotCtrl ($scope, $state, $http) {
		$scope.formData = {};

		$scope.forgotUsername = function () {

			//min length 8 chars
			if ($scope.formData.email) {
				$state.go('forgotUsernameSuccess');
			} else {

			}
		} //end forgotUsername

		$scope.forgotPassword = function () {
			//min length 8 chars
			if ($scope.formData.username){
				toastr.success('Confirmation email sent. You will be redirected in 3 seconds');

				setTimeout(function () {
					$state.go('home');
				}, 3000);
			} else {
				console.log('no username');
			}
		} //end forgotPassword


		$scope.signUp = function () {
			$state.go('forgotUsernameSuccess');
		} //end forgotUsername

	} //end forgot ctrl

}());



