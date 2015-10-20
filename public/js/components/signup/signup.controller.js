(function () {
	angular
		.module('signup')
		.controller('signupCtrl', loginCtrl);

	loginCtrl.$inject = ['$scope'];

	function loginCtrl ($scope) {
		$scope.formData = {};

		$scope.signup = signup;

		// function signup () {
		// 	console.log('logging in');
		// 	signupService.signup($scope.formData)
		// 		.then(function (res) {
		// 			console.log(res);
		// 		});
		// }//end function signup()
		
	}//end loginCtrl
}());