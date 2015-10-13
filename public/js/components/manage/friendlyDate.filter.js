(function () {
	angular
		.module('ums')
		.filter('friendlyDate', friendlyDate);

	function friendlyDate () {
		return function (date) {
			return date.toLocaleDateString();
		};
	}
}());