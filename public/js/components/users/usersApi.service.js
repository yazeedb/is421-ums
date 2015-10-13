(function () {
	angular
		.module('users')
		.factory('usersApi', usersApi);

	usersApi.$inject = ['$http'];

	function usersApi ($http) {
		var factory = {
			getUser: getUser,
			postUser: postUser,
			putUser: putUser,
			deleteUser: deleteUser,
			actionOnUsers: actionOnUsers
		};

		var usersApiPath = '/api/users/';

		function getUser (userId) {
			if (userId) {
				var fullApiPath = usersApiPath + userId;
				return $http.get(fullApiPath);
			}
			else {
				return $http.get(usersApiPath);
			}
		}

		function postUser (userData) {
			return $http.post(usersApiPath, userData);
		}

		function putUser (userData) {
			return $http.put(usersApiPath, userData);
		}

		function deleteUser (userId) {
			var fullApiPath = usersApiPath + userId;
			return $http.delete(fullApiPath);
		}

		function actionOnUsers (arrayOfUsers, action) {
			var i = 0,
				allUsers = arrayOfUsers.length,
				currentUser;

			for (i; i < allUsers; i++) {
				currentUser = arrayOfUsers[i];
				action(currentUser);
			}
		}

		return factory;
	}
}());