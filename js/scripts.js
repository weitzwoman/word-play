var words = [];
var sentenceString = [];
var longWords = [];
var finalString;

$(document).ready(function() {
  $("form").submit(function(event){
    sentenceString = $("input#sentence").val();

    words = sentenceString.split(" ");

    longWords = words.filter(function(word){
      return word.length >= 4;
    });

    longWords.reverse();
    finalString = longWords.join(" ");
    $(".output").text(finalString);

    event.preventDefault();
  });
});
