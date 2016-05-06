var module = angular.module('DAGK-App', []);

module.controller('Contain-Controller', function($scope, $http) {
	$http.get('cv.json').success(function(data) {
		$scope.mydata = data;
	});

	$scope.display = true;
	$scope.getFile = function () {
        $scope.progress = 0;
        fileReader.readAsDataUrl($scope.file, $scope)
                      .then(function(result) {
                          $scope.imageSrc = result;
                      });
    };
	
});