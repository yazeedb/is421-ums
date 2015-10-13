(function () {
	angular
		.module('admin')
		.factory('adminControls', adminControls);

	function adminControls () {
		var factory = {
			actionOnUsers: actionOnUsers,
			getSelectedUsers: getSelectedUsers
		};

		function actionOnUsers (listOfUsers, action) {
			var i = 0,
				userCount = listOfUsers.length,
				currentUser;

			for (i; i < userCount; i++) {
				currentUser = listOfUsers[i];

				action(currentUser);
			}
		}

		function getSelectedUsers (listOfUsers) {
			var selectedUsers = [];

			this.actionOnUsers(listOfUsers, function (user) {
				if (user.selected)
					selectedUsers.push(user);
			});

			return selectedUsers;
		}

		return factory;
	}
}());