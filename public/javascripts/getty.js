var wordsOne = [];
var wordsTWo = [];
var tempwords = [];
var wordsThree = [];
var allWords = [];

//This function grabs all of the words in the speech and places them into an array. 
function getWords(){
  var one = document.getElementById('paraOne').innerHTML;
  var two = document.getElementById('paraTwo').innerHTML;
  var three = document.getElementById('paraThree').innerHTML;
  wordsOne = one.split(" ");
  wordsTwo = two.split(" ");
  wordsThree = three.split(" ");
  tempwords = wordsOne.concat(wordsTwo);
  allWords = tempwords.concat(wordsThree);
  for (var i = 0; i < allWords.length; i++){
    console.log(allWords[i]);
  }

}

window.onload = function() {
  getWords();
};

I have to remember how to find the particular value which repeats in an array. 
1. Get one word, start at index = 0, search through the entire array. 
2. 

for loop - selects particular word 
  for loop will go through comparing selected word to everything else. 


// phrase = input("Please enter in a word: ")
// word = list(phrase)
// letter = []

// count = 0 
// tally = 0

// for i in range(1, len(word)):
//   if word[count] == word[count + 1]:
//     tally += 2
//     letter.append(word[count])
//   count += 1


// print(tally)
// print(letter)