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
    // console.log(allWords[i]);
  }

}

window.onload = function() {
  getWords();
};

d3.select(".test").append("p").text("New Paragraph! YAY IT WORKS");

// I have to remember how to find the particular value which repeats in an array. 
// 1. Get one word, start at index = 0, search through the entire array. 
// 2. 

// for loop - selects particular word 
//   for loop will go through comparing selected word to everything else. 

// string = input("Please enter in a word: ")
// mylist_char = []
// mylist_count = []
// char = None
// count = 0

// for ch in string:
//     print("ch:",ch)
//     temp_char = ch
//     temp_count = 0
//     for ch1 in string:
//         print("ch1:",ch1)
//         if temp_char == ch1:
//             temp_count += 1

//     if temp_count > count:
//         count = temp_count
//         char = temp_char

// mylist_char.append(char)
// mylist_count.append(count)

// print(mylist_char)


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