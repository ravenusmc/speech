//This is the main function for the program. 
function main(){

  //This array will hold all of the words. 
  var allwords = [];

  //Getting the array that will hold all of the words filled. 
  allWords = getWords();

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
  for (var i = 0; i < allWords.length; i++){
    if (allWords[i] != "and" && allWords[i] != "on" && allWords[i] != "of" && allWords[i] != "for"
    && allWords[i] != "to" && allWords[i] != "or" && allWords[i] != "a" && allWords[i] != "that" && allWords[i] != "in"
    && allWords[i] != "do" && allWords[i] != "so" && allWords[i] != "this" && allWords[i] != "the" && allWords[i] != "The"
    && allWords[i] != "any" && allWords[i] != "can" && allWords[i] != "as" && allWords[i] != "But"
    && allWords[i] != "should" && allWords[i] != "from" && allWords[i] != "nor" && allWords[i] != "what"
    && allWords[i] != "but" && allWords[i] != "thus" && allWords[i] != "which" && allWords[i] != "have"){
      words.push(allWords[i]);
    }
  }



  //Returning the array
  return words; 

}


//This is what will execute the code once the screen has loaded. 
window.onload = function() {
  main();
};

