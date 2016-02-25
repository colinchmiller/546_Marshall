var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
      $routeProvider.
          when('/history', {
            templateUrl: 'assets/views/routes/history.html',
            controller: 'HistoryController'
          })
}]);

mainApp.controller('testController', ['$scope', function($scope){
  console.log("testController firing!");
  $scope.test = "This is a test section!";
}]);

mainApp.controller('HistoryController', ['$scope', function($scope){
  console.log("HistoryController firing!");
  $scope.test = "This is a test of the history route on the DOM";
}])
