(function () {
	angular
		.module('admin')
		.filter('friendlyDate', friendlyDate);

	function friendlyDate () {
		return function (date) {
			return date.toLocaleDateString();
		};
	}
}());