(function () {
	angular
		.module('ums')
		.config(routeConfig);

	routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

	function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider, $route) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html',
				controller: 'loginCtrl'
			})

			.state('signup', {
				url: '/signup',
				templateUrl: 'views/signup.html',
				controller: 'signupCtrl'
			})

			.state('profilePage', {
				url: '/users/{username}',
				templateUrl: 'views/profilePage.html',
				controller: 'profilePage'
			})

			.state('manage', {
				url: '/admin',
				templateUrl: 'views/manage.html',
				controller: 'manageCtrl'
			})

			.state('forgotUsername', {
				url: '/forgotUsername',
				templateUrl: 'views/forgotUsername.html',
				controller: 'forgotCtrl'
			})

			.state('forgotUsernameSuccess', {
				url: '/forgotUsernameSuccess',
				templateUrl: 'views/forgotUsernameSuccess.html'
				
			})

			.state('forgotPassword', {
				url: '/forgotPassword',
				templateUrl: 'views/forgotPassword.html',
				controller: 'forgotCtrl'
			})

			.state('forgotPasswordSuccess', {
				url: '/forgotPasswordSuccess',
				templateUrl: 'views/forgotPasswordSuccess.html'
			})

			.state('resetPassword', {
				url: '/resetPassword',
				templateUrl: 'views/resetPassword.html'
			})

			.state('resetPasswordSuccess', {
				url: '/resetPasswordSuccess',
				templateUrl: 'views/resetPasswordSuccess.html'
			});

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	}
}());