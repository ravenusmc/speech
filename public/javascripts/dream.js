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
  var wordsOne = [];

  //Pulling the words from each paragraph
  var one = document.getElementById('wordsOne').innerHTML;

  //Spliting the words up and then placing them into an array
  wordsOne = one.split(" ");

  //Returning the array
  return wordsOne; 

}


//This is what will execute the code once the screen has loaded. 
window.onload = function() {
  main();
};

