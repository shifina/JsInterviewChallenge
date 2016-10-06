// Module
var app = angular.module('myApp', []);
app.controller('myController', function ($scope, $http) {
    $http.get("http://jsonplaceholder.typicode.com/posts")
        .success(function (response) {
            $scope.friends = response;
        });
    $scope.column = 'id';

// sort ordering (Ascending or Descending). Set true for desending
    $scope.reverse = false;

// called on header click
//noinspection JSAnnotator
    $scope.sortColumn = function(col){

        $scope.column = col;
        if ($scope.reverse) {
            $scope.reverse = false;
            $scope.reverseclass = 'arrow-up';
        } else {
            $scope.reverse = true;
            $scope.reverseclass = 'arrow-down';
        }
    };

// remove and change class
    $scope.sortClass = function(col) {

        if ($scope.column == col) {
            if ($scope.reverse) {
                return 'arrow-down';
            } else {
                return 'arrow-up';
            }
        } else {
            return '';
        }
    }
});
