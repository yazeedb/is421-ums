(function () {
	angular
		.module('ums')
		.config(routeConfig);

	routeConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

	function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'views/home.html'
			})

			.state('manage', {
				url: '/manage',
				templateUrl: 'manage.html'
			});

		$urlRouterProvider.otherwise('/');
		$locationProvider.html5Mode(true);
	}
}());