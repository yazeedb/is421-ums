(function () {
	angular
		.module('ums')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope', 'fakeUsers'];

	function manageCtrl ($scope, fakeUsers) {
		$scope.users = [];

		$scope.selectAllUsers = selectAllUsers;

		for (var i = 0; i < 10; i++) {
			$scope.users.push(fakeUsers.makeUser());
		}

		function selectAllUsers () {
			for (var i = 0; i < $scope.users.length; i++) {
				var currentUser = $scope.users[i];
				currentUser.checked = !currentUser.checked;
			}
		}
	}
}());