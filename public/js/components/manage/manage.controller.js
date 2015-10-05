(function () {
	angular
		.module('ums')
		.controller('manageCtrl', manageCtrl);

		manageCtrl.$inject = ['$scope'];

	function manageCtrl ($scope) {
		$scope.users = [
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			},
			{
				username: 'ybzadough',
				email: 'ybzadough@gmail.com',
				firstName: 'Yazeed',
				lastName: 'Bzadough',
				admin: 'true',
				dateJoined: '10/4/2015'	
			}
		];
	}
}());