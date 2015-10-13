(function () {
	angular
		.module('users')
		.factory('fakeUsers', fakeUsers);

	function fakeUsers () {
		var factory = {
			makeUser: makeUser
		};

		function makeUser () {
			var user = {
				firstName: faker.name.firstName(),
				lastName: faker.name.lastName(),
				admin: (Math.random() > 0.65),
				dateJoined: faker.date.past()
			};

			user.email = faker.internet.email(user.firstName, user.lastName);
			user.username = faker.internet.userName(user.firstName, user.lastName);

			return user;
		}
		
		return factory;
	}
}());

/*

username: 'ybzadough',
email: 'ybzadough@gmail.com',
firstName: 'Yazeed',
lastName: 'Bzadough',
admin: 'true',
dateJoined: '10/4/2015'	

*/