// PROBLEM 1
// returns sum of items in array
const findSum = function(array) {

  let arraySum = 0;
  for (i = 0; i < array.length; i++){
      arraySum += array[i];
  }

  return arraySum
};

// PROBLEM 2
// returns highest and lowest freq of array of elements
const findFrequency = function(array) {

  // create object that contains frequencies, loop through array and inc freq
  let frequencies = {};
  for (i = 0; i < array.length; i++){

    // if item is in object already, inc its value
    if (frequencies.hasOwnProperty(array[i])){
        frequencies[array[i]]++;
    } else { // else add to freq with freq = 1       
        frequencies[array[i]] = 1;
    }  
  }

  // convert values to list
  let values = Object.values(frequencies);

  // convert letters to list
  let letters = Object.getOwnPropertyNames(frequencies);

  //  get min index
  let minIndex = 0;
  for (i = 1; i < values.length; i++){
      if (values[i] < values[minIndex]){
          minIndex = i;
      }
  }

  // get max index
  let maxIndex = 0;
  for (i = 1; i < values.length; i++){
      if (values[i] > values[maxIndex]){
          maxIndex = i;
        }
    }

  // create min max obj
  let minAndMax = {"most" : letters[maxIndex], "least" : letters[minIndex]}


  // create obj of min and max values
  //  minAndMax = {"most" : max, "least" : min}
  return minAndMax

};


// PROBLEM 3
// takes string and returns True/False if palindrome or nto
const isPalindrome = function(str) {
  let first = str[0]
  let last = str[str.length - 1]

  while (first < last){
      if (str[first] != str[last]);
      return false;
  }

  return true;
};



// PROBLEM 4
//  Write a function called largestPair that takes an array of integers 
// and finds the pair of adjacent elements that has the largest product and 
// return that product. For example:

const largestPair = function(array) {
  max = array[0] * array[1];
  let i = 0;
  while (i < array.length - 2){
    product = array[i] * array[i + 1];
    if (product > max){
      max = product;
    }

    i++;
  }

  return max;
};


// PROBLEM 5
// Write a function called removeParenth that takes one argument (a string) 
//  which has parentheses (1 open and 1 close) and returns that same string, 
//  but without the parentheses and the text inside the parentheses. You can 
//  assume that the string is one word with no spaces and only 1 set of parentheses. 
//  For example:
// removeParenth('ido(not)liketocode'); // 'idoliketocode'
const removeParenth = function(str) {

  let openInd = 0;
  for (let i = 0; i < str.length; i++){
    if (str[i] == "(") {
      openInd = i;
    }
  };

  let closeInd = str.length - 1
  for (let i = openInd; i < str.length; i++){
    if (str[i] == ")") {
      closeInd = i;
    }

  }

  // research js slicing
  return str.slice(0, openInd) + str.slice(closeInd + 1, str.length)
}


// PROBLEM 6
//  Write a function called scoreScrabble which takes a string as an argument 
// (a single word) and returns the word's scrabble score as a number. For reference,
//  the following letters are the worth of the following points:
//  1 - a, e, i, o, u, l, n, r, s, t
//  2 - d, g
//  3 - b, c, m, p
//  4 - f, h, v, w, y
//  5 - k
//  8 - j, x
//  10 - q, z
// scoreScrabble('hello'); // 8
//  scoreScrabble('quiet'); // 14

const scoreScrabble = function(str) {
  let score = 0;

  for (let i = 0; i < str.length; i++){
    
    if (str[i] == 'a' || str[i] ==  'e' || str[i] ==  'i' || str[i] ==  'o' || str[i] ==  'u'
    || str[i] ==  'l' || str[i] ==  'n' || str[i] ==  'v' || str[i] ==  's' || str[i] ==  't'){
      score += 1;
    } else if (str[i] == 'd' || str[i] ==  'g'){
      score += 2;
    } else if (str[i] == 'b' || str[i] ==  'c' || str[i] ==  'm' || str[i] ==  'p'){
      score += 3;
    } else if (str[i] == 'f' || str[i] ==  'h' || str[i] ==  'v' || str[i] ==  'w' || str[i] ==  'y'){
      score += 4;
    } else if (str[i] == 'k'){
      score += 5;
    } else if (str[i] == 'j' || str[i] ==  'x'){
      score += 8;
    } else if (str[i] == 'q' || str[i] ==  'z'){
      score += 10;
    }

  }

  return score;
};
