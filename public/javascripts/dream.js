//This is the main function for the program. 
function main(){

  //This array will hold all of the words. 
  var allwords = [];

  //Getting the array that will hold all of the words filled. 
  allWords = getWords();

  //Displaying all the words for testing purposes
  console.log(allWords);


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


//This is what will execute the code once the screen has loaded. 
window.onload = function() {
  main();
};

