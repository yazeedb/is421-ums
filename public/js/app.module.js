(function () {
	angular
		.module('ums', ['ui.router', 'httpInterceptorModule', 'auth', 'users', 'admin', 'login','forgot','signup'])

		.config(['$httpProvider', httpConfig]);

		function httpConfig ($httpProvider) {
			$httpProvider.interceptors.push('interceptHttp');
		}
}());