(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state'];

	function forgotCtrl ($scope, $state) {
		//make sure its injecting	
		console.log("forgot controller injected");

		$scope.forgotUsername = function () {
			if(!formData.email){
				
			}
		}
		
	}

}());



