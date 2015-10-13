(function () {
	angular
		.module('ums')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope', 'fakeUsers', 'usersApi'];

	function manageCtrl ($scope, fakeUsers, usersApi) {
		$scope.users = [];

		$scope.selectAllUsers = selectAllUsers;
		$scope.deleteUser = deleteUser;

		for (var i = 0; i < 10; i++) {
			$scope.users.push(fakeUsers.makeUser());
		}

		function selectAllUsers () {
			usersApi.actionOnUsers($scope.users, function (user) {
				user.selected = $scope.allUsersSelected;
			});
		}

		function getSelectedUsers () {
			var selectedUsers = [];

			usersApi.actionOnUsers($scope.users, function (user) {
				if (user.selected)
					selectedUsers.push(user);
			});

			return selectedUsers;
		}

		function deleteUser () {
			var usersToDelete = getSelectedUsers();

			if (usersToDelete.length) {
				var swalOptions = {
					title: 'Are you sure?',
					type: 'warning',
					showCancelButton: true,
					confirmButtonText: 'Yes',
					confirmButtonColor: '#DD6B55'
				};

				swalOptions.text = 'Delete ' + usersToDelete.length + ' user';
				swalOptions.text += usersToDelete.length > 1 ? 
				's?' : '?'; 
				
				swal(swalOptions, function () {
					toastr.success('Success!', 'Users deleted');
				});
			}
		}
	}
}());