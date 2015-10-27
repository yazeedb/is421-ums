(function () {
	angular
		.module('users')
		.controller('profilePage', profilePage);

	profilePage.$inject = ['$scope', '$stateParams', 'usersApi'];

	function profilePage ($scope, $stateParams, usersApi) {
		console.log($scope);
		console.log($stateParams);

		usersApi.getUser($stateParams.username)
		.then(function (res) {
			
		});
	}
}());