(function () {
	angular
		.module('ums')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope', 'fakeUsers'];

	function manageCtrl ($scope, fakeUsers) {
		$scope.users = [];
		var i;

		for (i = 0; i < 10; i++) {
			$scope.users.push(fakeUsers.makeUser());
		}
	}
}());