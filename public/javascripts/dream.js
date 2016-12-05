//This is the main function for the program. 
function main(){

  //This array will hold all of the words. 
  var allwords = [];
  var words = [];
  var w = 1000;
  var h = 6000;
  var barPadding = 1;

  //Getting the array that will hold all of the words filled. 
  allWords = getWords();
  //This function will return an array of objects that will hold all of the words and the frequency that it appears.
  words = getwordCount(allWords);

  //Displaying all the words for testing purposes
  //console.log(allWords);
  console.log(words);

  //D3 code 
  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
  svg.selectAll("rect")
    .data(words)
    .enter()
    .append("rect")
    .attr("width", function(d){
      return d.count * 60;
    })
    .attr("height", 100)
    .attr("y", function(d, i)
    {
      return i * 20;
    })
    .attr("fill", "red");


  svg.selectAll("text")
    .data(words)
    .enter()
    .append("text")
    .attr("fill", "#ffffff")
    //This moves the text up and down
    .attr("y", function(d, i){
      return i * 80 + 30;
    })
    //This moves the placement of the text left and right
    .attr("x", 20)
    .text(function(d){
      return  "word: " + d.word + " Word Count: " + d.count;
    })

}

//This function grabs all of the words in the speech and places them into an array
function getWords(){

  //Creating an array to hold all of the words for each paragraph
  var allWords = [];
  var words = [];

  //Pulling the words from each paragraph
  var one = document.getElementById('wordsOne').innerHTML;

  //Spliting the words up and then placing them into an array
  wordsOne = one.split(" ");

  //In this for loop I am removing all words that I do not care about such as coordinating conjunctions etc. 
  for (var i = 0; i < wordsOne.length; i++){
    if (wordsOne[i] != "and" && wordsOne[i] != "on" && wordsOne[i] != "of" && wordsOne[i] != "for"
    && wordsOne[i] != "to" && wordsOne[i] != "or" && wordsOne[i] != "a" && wordsOne[i] != "that" && wordsOne[i] != "in"
    && wordsOne[i] != "do" && wordsOne[i] != "so" && wordsOne[i] != "this" && wordsOne[i] != "the" && wordsOne[i] != "The"
    && wordsOne[i] != "any" && wordsOne[i] != "can" && wordsOne[i] != "as" && wordsOne[i] != "But"
    && wordsOne[i] != "should" && wordsOne[i] != "from" && wordsOne[i] != "nor" && wordsOne[i] != "what"
    && wordsOne[i] != "but" && wordsOne[i] != "thus" && wordsOne[i] != "which" && wordsOne[i] != "have" 
    && wordsOne[i] != "" && wordsOne[i] != "This" && wordsOne[i] != "who" && wordsOne[i] != "an" 
    && wordsOne[i] != "not" && wordsOne[i] != "only" && wordsOne[i] != "still" && wordsOne[i] != "into" && wordsOne[i] != "had"
    && wordsOne[i] != "been" && wordsOne[i] != "And"){
      words.push(wordsOne[i]);
    }
  }

  //Returning the array
  return words; 
}

//This function will find the count of each word in the allwords array.
function getwordCount(allWords){

  var words = []

  for (var i = 1; i < allWords.length; i++){
      var tempWord = allWords[i];
      var wordCount = 0
      for (var j = 1; j < allWords.length; j++){
        if (tempWord == allWords[j]){
          wordCount += 1;
        }
      }
      if (wordCount <= 8 &&  wordCount >= 2){
        words.push({word: tempWord, count: wordCount });
      }     
    }

  return words;
}


//This is what will execute the code once the screen has loaded. 
window.onload = function() {
  main();
};

