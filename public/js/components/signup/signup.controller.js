(function () {
	angular
		.module('signup')
		.controller('signupCtrl', signupCtrl);

	signupCtrl.$inject = ['$scope'];


	function signupCtrl ($scope) {

		console.log("signup controller injected");

		//$scope.formData = {};

		console.log($scope.signupForm);

		$scope.title = "signup";

		$scope.passwordErrors = false;

		// function signup () {
		// 	console.log('logging in');
		// 	signupService.signup($scope.formData)
		// 		.then(function (res) {
		// 			console.log(res);
		// 		});
		// }//end function signup()

	}//end signupCtrl
}());