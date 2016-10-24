var words = [];
var sentenceString = [];
var longWords = [];
var finalString;

$(document).ready(function() {
  $("form").submit(function(event){
    sentenceString = $("input#sentence").val();

    words = sentenceString.split(" ");

    words.forEach(function(word){
      if (word.length >= 4) {
        longWords.push(word);
      }

    });

    longWords.reverse();
    finalString = longWords.join(" ");
    $(".output").text(finalString);

    event.preventDefault();
  });
});
