var app = angular.module('myModule');

app.controller('inputCtrl', function($scope, wordFactory, $location) {

  $scope.submitWords = function(wordsObj) {
    wordFactory.setWords(wordsObj);
    $location.path('/output');
  };

})
