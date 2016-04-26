var module = angular.module('DAGK-App', []);

module.controller('Contain-Controller', function($scope, $http) {
	$http.get('cv.json').success(function(data) {
		$scope.mydata = data;
	});

	
});