(function () {
	angular
		.module('forgot')
		.controller('forgotCtrl', forgotCtrl);

	forgotCtrl.$inject = ['$scope','$state','$http'];

	function forgotCtrl ($scope, $state,$http) {
		//make sure its injecting	
		console.log("forgot controller injected");




		 $http.post('http://anaik.us:8500/rest/user/login',{username:'auk2',password:'huknjk'}).then(function(res){
        console.log(res.data);
      })




		$scope.forgotUsername = function () {
			if(!formData.email){
				
			}
		}
		
	}

}());



