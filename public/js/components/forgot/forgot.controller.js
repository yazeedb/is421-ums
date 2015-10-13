(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state','$http'];

	function forgotCtrl ($scope, $state,$http) {
		//make sure its injecting	
		console.log("forgot controller injected");

		$scope.formData = {};

		$scope.forgotUsername = function () {

			//min length 8 chars
			if($scope.formData.email){
				$state.go('forgotUsernameSuccess');
			}
			else{

			}
		} //end forgotUsername

		$scope.forgotPassword = function () {

			//min length 8 chars
			if($scope.formData.username){
				$state.go('forgotPasswordSuccess');
			}
			else{

			}
		} //end forgotUsername


		$scope.signUp = function () {

			$state.go('forgotUsernameSuccess');
			
		} //end forgotUsername




	} //end forgot ctrl

}());



