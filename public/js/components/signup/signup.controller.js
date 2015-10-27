(function () {
	angular
		.module('signup')
		.controller('signupCtrl', signupCtrl);

	signupCtrl.$inject = ['$scope', 'usersApi'];


	function signupCtrl ($scope, usersApi) {

		console.log("signup controller injected");

		$scope.title = "signup";

		$scope.passwordErrors = false;

		$scope.form = {
			firstname:"",
			lastname:"",
			username:"",
			password:"",
			confirmPassword:"",
			email:"",
			gender:""
		}

		$scope.errors = false;

	

		$scope.submit = function () {
			//console.log($scope.form);
			$scope.errors = false;
			
			angular.forEach($scope.form, function (value, key) {
				if (!value) {
					console.log('fill out ' + key);

					$scope.errors = true;
				}
			})
			
			if($scope.errors == false){
				usersApi.postUser($scope.form);
			}
			//signupService.signup(form);
		}



		// function signup () {
		// 	console.log('logging in');
		// 	signupService.signup($scope.formData)
		// 		.then(function (res) {
		// 			console.log(res);
		// 		});
		// }//end function signup()

	}//end signupCtrl
}());