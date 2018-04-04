var app = angular.module('indexSPA',["ngRoute"]);

app.config(["$routeProvider",function($routeProvider){
  $routeProvider
   .when('/',{
     templateUrl: '/templates/home.hbs',
   })
   .when('/home',{
     templateUrl: '/templates/home.hbs',
   })
   .when('/about',{
     templateUrl: '/templates/about.hbs',
   })
   .when('/contact',{
     templateUrl: '/templates/contact.hbs',
   })
   .otherwise({
     redirectTo: '/home'
   })
}])
