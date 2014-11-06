var myApp = angular.module('myApp', []);

myApp.controller('SearchListController', function($scope, $http){

$scope.Math = window.Math;

$scope.makeQuery = function(nPage){
	
	var app = this;
	$scope.actualPage = nPage;
	$scope.itemsPerPage = 10;
$http.get('https://api.github.com/search/repositories', 
{ params: { order: $scope.searchOrder, q: $scope.searchName, sort: $scope.sortBy, per_page: $scope.itemsPerPage, page: $scope.actualPage}})
.success(function(data) {
  app.results = data; 
  }); 
};	
$scope.movePageBack = function(){	
	$scope.actualPage =  $scope.actualPage - 1;
	$scope.makeQuery($scope.actualPage);
};

$scope.movePageForward = function(){
	$scope.actualPage =  $scope.actualPage + 1;
	$scope.makeQuery($scope.actualPage);
};

$scope.goToPage = function(goPage, maxPage){
if(goPage <= maxPage && goPage > 0){
	$scope.makeQuery(goPage);
	$scope.goPage = null;
	}
else{
	alert("Invalid Input");
}
};
});