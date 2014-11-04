var myApp = angular.module('myApp', []);

myApp.controller('SearchListController', function($scope, $http){

$scope.makeQuery = function(){
$http.get('https://api.github.com/search/repositories', 
{ params: { q: $scope.searchName, sort: $scope.searchSort}})
.success(function(data) {
  $scope.results = data; 
  }); 
};

});