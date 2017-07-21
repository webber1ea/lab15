var app = angular.module('myModule');

app.controller('outputCtrl', function($scope, wordFactory){

  $scope.retrievedWords = wordFactory.getWords();
})
