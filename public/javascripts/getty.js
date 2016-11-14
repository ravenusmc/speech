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

  // var svg = d3.select("body")
  //             .append("svg")
  //             .attr("width", w)
  //             .attr("height", h);
  // svg.selectAll("rect")
  //   .data(words)
  //   .enter()
  //   .append("rect")
  //   .attr("width", function(d){
  //     return d.count * 80;
  //   })
  //   .attr("height", 5000)
  //   .attr("y", function(d, i)
  //   {
  //     return i * 20;
  //   })
  //   .attr("fill", "blue");


  // svg.selectAll("text")
  //   .data(words)
  //   .enter()
  //   .append("text")
  //   .attr("fill", "#ffffff")
  //   .attr("y", function(d, i){
  //     return i * 80 + 25
  //   })
  //   .attr("x", 5)
  //   .text(function(d){
  //     return  "word: " + d.word + " Word Count: " + d.count;
  //   })
  //   .text(function(d){
  //     return d;
  //   })
  //   .attr("x", function(d, i){
  //     return i * (w / nums.length); //bar width of 20 plus 1 for padding
  //   })
  //   .attr("y", function(d){
  //     return h - (d * 10);
  //   });

  //The below way displays the bar chart but with no words. I also create an array of simply the 
  //word count from my array of objects named words. 

  //This for loop pushs the count values into a nums array to hold them.
  // nums = [];
  // for (var i = 0; i < words.length; i++){
  //   nums.push(words[i].count);
  // }

  // var svg = d3.select("body")
  //             .append("svg")
  //             .attr("width", w)
  //             .attr("height", h);
  // svg.selectAll("rect")
  //   .data(nums)
  //   .enter()
  //   .append("rect")
  //   .attr("x", function(d, i){
  //     return i * (w / nums.length); //bar width of 20 plus 1 for padding
  //   })
  //   .attr("y", function(d){
  //     return h - (d * 10);
  //   })
  //   .attr("width", w / nums.length - barPadding)
  //   .attr("height", function(d){
  //     return d * 10; 
  //   })
  //   .attr("fill", "teal");


  // svg.selectAll("text")
  //   .data(words)
  //   .enter()
  //   .append("text")
  //   .text(function(d){
  //     return d;
  //   })
  //   .attr("x", function(d, i){
  //     return i * (w / nums.length); //bar width of 20 plus 1 for padding
  //   })
  //   .attr("y", function(d){
  //     return h - (d * 10);
  //   });


  //THE BELOW CODE WHICH WILL HAVE THE BAR CHART
  var svg = d3.select("body")
              .append("svg")
              .attr("width", w)
              .attr("height", h);
  svg.selectAll("rect")
    .data(words)
    .enter()
    .append("rect")
    .attr("x", function(d, i){
      return i * (w / words.length); //bar width of 20 plus 1 for padding
    })
    .attr("y", function(d){
      return h - (d.count * 10);
    })
    .attr("width", w / words.length - barPadding)
    .attr("height", function(d){
      return d.count * 10; 
    })
    .attr("fill", "teal");

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
  //debugger;
  //In this for loop I am removing all words that I do not care about such as coordinating conjunctions etc. 
  for (var i = 0; i < allWordsTemp.length; i++){
    if ( allWordsTemp[i] != "and" && allWordsTemp[i] != "on" && allWordsTemp[i] != "of" && allWordsTemp[i] != "for"
    && allWordsTemp[i] != "to" && allWordsTemp[i] != "or" && allWordsTemp[i] != "a" && allWordsTemp[i] != "that" && allWordsTemp[i] != "in"
    && allWordsTemp[i] != "do" && allWordsTemp[i] != "so" && allWordsTemp[i] != "this" && allWordsTemp[i] != "the" && allWordsTemp[i] != "The"
    && allWordsTemp[i] != "any" && allWordsTemp[i] != "can" && allWordsTemp[i] != "as" && allWordsTemp[i] != "But"
    && allWordsTemp[i] != "should" && allWordsTemp[i] != "from" && allWordsTemp[i] != "nor" && allWordsTemp[i] != "what"
    && allWordsTemp[i] != "but" && allWordsTemp[i] != "thus" && allWordsTemp[i] != "which" && allWordsTemp[i] != "have"){
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
      if (wordCount <= 8 &&  wordCount >= 2){
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


