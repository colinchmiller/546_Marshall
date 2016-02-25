var mainApp = angular.module('mainApp', []);

mainApp.controller('testController', ['$scope', function($scope){
  console.log("testController firing!");
  $scope.test = "This is a test section!";
}]);
