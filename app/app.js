angular.module('app', [
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/index", {
		templateUrl: "view/test1.html", 
		controller: "test1",
		controllerAs: 'vm'
	}).
	when("/test2", {
		templateUrl: "view/test2.html", 
		controller: "test2",
		controllerAs: 'vm'
	}).
	otherwise({
		redirectTo: '/index'
	});
}]);