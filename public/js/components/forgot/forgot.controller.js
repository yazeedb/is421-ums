(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state'];

	function forgotCtrl ($scope, $state) {

		//make sure its injecting	
		console.log("forgot controller injected");

		//forgot username
		$scope.forgotUsername = forgotUsername;
		
		function forgotUsername(){
			console.log("working");
			swal('working');
		}

		
	}
}());



