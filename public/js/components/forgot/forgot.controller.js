(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state','$http'];

	function forgotCtrl ($scope, $state,$http) {
		//make sure its injecting	
		console.log("forgot controller injected");


		$scope.forgotUsername = function () {
			if(!formData.email){
				
			}
		}
		
	}

}());



