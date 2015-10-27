(function () {
	angular
		.module('admin')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope', 'fakeUsers', 'adminControls', '$uibModal', '$http', 'allUsers'];

	function manageCtrl ($scope, fakeUsers, adminControls, $uibModal, $http, allUsers) {
		$scope.users = allUsers.data;
		$scope.newUser = {};

		$scope.selectAllUsers = selectAllUsers;
		$scope.addUser = addUser;
		$scope.saveUser = saveUser;
		$scope.changeUserRole = changeUserRole;
		$scope.deleteUser = deleteUser;

		function selectAllUsers () {
			adminControls.actionOnUsers($scope.users, function (user) {
				user.selected = $scope.allUsersSelected;
			});
		}

		function addUser (newUser) {
			$uibModal.open({
				templateUrl: 'js/components/admin/views/addUser.html',
				controller: 'manageCtrl'
			});
		}

		function saveUser () {
			$http.post('/api/users', $scope.newUser)
				.then(function (res) {
					console.log(res);
				});
		}

		function changeUserRole () {
			var usersToChange = adminControls.getSelectedUsers($scope.users);

			if (usersToChange.length) {
				adminControls.actionOnUsers(usersToChange, function (user) {
					user.admin = !user.admin;
				});

				toastr.success('Roles changed', 'Success');
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
					toastr.success('Users deleted!', 'Success');
				});
			}
		}
	}
}());