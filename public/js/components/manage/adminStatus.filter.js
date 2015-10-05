(function () {
	angular
		.module('ums')
		.filter('adminStatus', adminStatus);

	function adminStatus () {
		return function (status) {
			return status ? 'Admin' : 'User';
		}
	}
}());