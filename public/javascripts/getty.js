//This takes a sentence and removes all coordinating conjuctions
function conjuctionFilter(sentence){
  sentence  = sentence.slice(sentence.indexOf("for"),sentence.lastIndeOf("for"));
  sentence  = sentence.slice(sentence.indexOf("and"),sentence.lastIndeOf("and"));
  sentence  = sentence.slice(sentence.indexOf("but"),sentence.lastIndeOf("but"));
  sentence  = sentence.slice(sentence.indexOf("or"),sentence.lastIndeOf("or"));
  sentence  = sentence.slice(sentence.indexOf("yet"),sentence.lastIndeOf("yet"));
  sentence  = sentence.slice(sentence.indexOf("so"),sentence.lastIndeOf("so"));
  
  sentence  = sentence.slice(sentence.indexOf("For"),sentence.lastIndeOf("For"));
  sentence  = sentence.slice(sentence.indexOf("And"),sentence.lastIndeOf("And"));
  sentence  = sentence.slice(sentence.indexOf("But"),sentence.lastIndeOf("But"));
  sentence  = sentence.slice(sentence.indexOf("Or"),sentence.lastIndeOf("Or"));
  sentence  = sentence.slice(sentence.indexOf("Yet"),sentence.lastIndeOf("Yet"));
  sentence  = sentence.slice(sentence.indexOf("So"),sentence.lastIndeOf("So"));
}

//This is the main function for the program. 
function main(){

  var allwords = [];
  var words = [];
  var w = 1000;
  var h = 100;
  var barPadding = 1;

  allWords = getWords();
  words = getwordCount(allWords);
  console.log(words);



  //This for loop pushs the count values into a nums array to hold them.
  nums = [];
  for (var i = 0; i < words.length; i++){
    nums.push(words[i].count);
  }

  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

  svg.selectAll("rect")
    .data(nums)
    .enter()
    .append("rect")
    .attr("x", function(d, i){
      return i * (w / nums.length); //bar width of 20 plus 1 for padding
    })
    .attr("y", function(d){
      return h - (d * 10);
    })
    .attr("width", w / nums.length - barPadding)
    .attr("height", function(d){
      return d * 10; 
    })
    .attr("fill", "teal");


  svg.selectAll("text")
    .data(nums)
    .enter()
    .append("text")
    .text(function(d){
      return d;
    })
    .attr("x", function(d, i){
      return i * (w / nums.length); //bar width of 20 plus 1 for padding
    })
    .attr("y", function(d){
      return h - (d * 10);
    });



  //d3.select(".test").append("p").text("New Paragraph! YAY IT WORKS");

  // d3.select('body').selectAll("div")
  //     .data(nums)
  //     .enter()
  //     .append("div")
  //     .attr("class", "graph")
  //     .style("height", function(d){
  //       var barHeight = d * 10;
  //       return barHeight + "px";
  //     });
}


//This function grabs all of the words in the speech and places them into an array. 
function getWords(){

  var wordsOne = [];
  var wordsTWo = [];
  var tempwords = [];
  var wordsThree = [];
  var allWordsTemp = [];
  var allWords = [];

  var one = document.getElementById('paraOne').innerHTML;
  var two = document.getElementById('paraTwo').innerHTML;
  var three = document.getElementById('paraThree').innerHTML;
  wordsOne = one.split(" ");
  wordsTwo = two.split(" ");
  wordsThree = three.split(" ");
  tempwords = wordsOne.concat(wordsTwo);
  allWordsTemp = tempwords.concat(wordsThree);
  for (var i = 0; i < allWordsTemp.length; i++){
    if (allWordsTemp[i] != ""){
      allWords.push(allWordsTemp[i]);
    }else if (allWordsTemp[i] != "and"){
      allWords.push(allWordsTemp[i]);
    }
  }

  return allWords;
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
      if (wordCount <= 5 &&  wordCount >= 2){
        words.push({word: tempWord, count: wordCount });
      }     
  }
  // console.log(words);
  return words;
}

//This is what will execute the code once the screen has loaded. 
window.onload = function() {
  main();
};

//debugger;

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
