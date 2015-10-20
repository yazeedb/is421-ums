(function () {
	angular
		.module('admin')
		.filter('adminStatus', adminStatus);

	function adminStatus () {
		return function (status) {
			return status ? 'Admin' : 'User';
		}
	}
}());