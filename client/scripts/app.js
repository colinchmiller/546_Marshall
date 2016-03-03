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
          when('/neighborhood', {
            templateUrl: 'assets/views/routes/neighborhood.html',
            controller: 'NeighborhoodController'
          }).
          otherwise({
            redirectTo: 'home'
          })
}]);

mainApp.controller('HomeController', ['$scope', function($scope){
  console.log("HomeController firing!");
}]);

mainApp.controller('HistoryController', ['$scope', function($scope){
  console.log("HistoryController firing!");
}]);

mainApp.controller('ArchitectController', ['$scope', function($scope){
  console.log("ArchitectController firing!");
}]);

mainApp.controller('TourController', ['$scope', function($scope){
  console.log("TourController is firing!");
}]);

mainApp.controller('ContactController', ['$scope', function($scope){
  console.log("ContactController is firing!");
}]);

mainApp.controller('NeighborhoodController', ['$scope', function($scope){
  console.log("NeighborhoodController is firing!");
}]);
