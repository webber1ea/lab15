var app = angular.module('myModule');

app.factory('wordFactory', function (){
  var words = {};

  return {
    setWords: setWords,
    getWords: getWords,
  }

  function setWords(wordsObj) {
    words = wordsObj;
  }

  function getWords() {
    return words;
  }
});
