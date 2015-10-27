(function () {
	angular
		.module('users')
		.controller('profilePage', profilePage);

	profilePage.$inject = ['$scope', '$stateParams', 'usersApi'];

	function profilePage ($scope, $stateParams, usersApi) {
		usersApi.getUser($stateParams.username)
		.then(function (res) {
			$scope.currentUser = res.data;
			console.log($scope.currentUser);
		});
	}
}());