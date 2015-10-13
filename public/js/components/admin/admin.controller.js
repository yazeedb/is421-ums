(function () {
	angular
		.module('admin')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope', 'fakeUsers', 'adminControls'];

	function manageCtrl ($scope, fakeUsers, adminControls) {
		$scope.users = [];

		$scope.selectAllUsers = selectAllUsers;
		$scope.changeUserRole = changeUserRole;
		$scope.deleteUser = deleteUser;

		for (var i = 0; i < 10; i++) {
			$scope.users.push(fakeUsers.makeUser());
		}

		function selectAllUsers () {
			adminControls.actionOnUsers($scope.users, function (user) {
				user.selected = $scope.allUsersSelected;
			});
		}

		function addUser () {
			
		}

		function changeUserRole () {
			var usersToChange = adminControls.getSelectedUsers($scope.users);

			if (usersToChange.length) {
				adminControls.actionOnUsers(usersToChange, function (user) {
					user.admin = !user.admin;
				});

				toastr.success('Success', 'Roles changed');
			}
		}

		function deleteUser () {
			var usersToDelete = adminControls.getSelectedUsers($scope.users);

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