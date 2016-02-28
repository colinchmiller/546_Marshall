var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function($routeProvider){
      $routeProvider.
          when('/home', {
            templateUrl: 'assets/views/routes/home.html',
            controller: 'HomeController'
          }).
          when('/history', {
            templateUrl: 'assets/views/routes/history.html',
            controller: 'HistoryController'
          }).
          when('/architect', {
            templateUrl: 'assets/views/routes/architect.html',
            controller: 'ArchitectController'
          }).
          when('/tour', {
            templateUrl: 'assets/views/routes/tour.html',
            controller: 'TourController'
          }).
          when('/contact', {
            templateUrl: 'assets/views/routes/contact.html',
            controller: 'ContactController'
          }).
          otherwise({
            redirectTo: 'home'
          })
}]);

mainApp.controller('HomeController', ['$scope', function($scope){
  console.log("HomeController firing!");
  $scope.test = "This is the Home Page";
}]);

mainApp.controller('HistoryController', ['$scope', function($scope){
  console.log("HistoryController firing!");
  $scope.test = "This is the History Page";
}]);

mainApp.controller('ArchitectController', ['$scope', function($scope){
  console.log("ArchitectController firing!");
  $scope.test = "This is the Architect Page";
}]);

mainApp.controller('TourController', ['$scope', function($scope){
  console.log("TourController is firing!");
  $scope.test = "This is the Tour Page";
}]);

mainApp.controller('ContactController', ['$scope', function($scope){
  console.log("ContactController is firing!");
  $scope.test = "This is the Contact Page"
}]);
