(function () {
	angular
		.module('admin')
		.factory('adminControls', adminControls);

	function adminControls () {
		var factory = {
			actionOnUsers: actionOnUsers
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

		return factory;
	}
}());