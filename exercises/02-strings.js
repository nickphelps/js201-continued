// TIP: check out these references for Strings and Arrays:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse (theString) {
  var splitString = theString.split('')
// console.log(splitString)
  var reverseString = splitString.reverse('')
// console.log(reverseString)
  var theStringReversed = reverseString.join('')

  return theStringReversed
}
reverse('skoob')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'

function findLongestWord (theString) {
  var splitString = theString.split(' ')
  var longestWord = ''
  var myAry = []

  // Creating Array with string

  for (var i = 0; i < splitString.length; i++) {
    //Putting splitstring into myAry
    myAry.push(splitString[i])
    //Comparing length of words
    if (myAry[i].length > longestWord.length) {
      longestWord = myAry[i]
    }
  }
  return longestWord
}
findLongestWord('a wookie of words')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'

function nicer (theString) {
  var newString = theString.replace('heck', '')
  var newString1 = newString.replace('darn', '')
  var newString2 = newString1.replace('dang', '')
  var newString3 = newString2.replace('crappy', '')
  // replaces the double whitespace with one whitespace
  return newString3.replace(/  +/g, ' ')
}
nicer('mom get the heck in here and bring me a darn sandwich.')

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll (theString) {
  var theNewString = ''
  //Seperates the words
  var splitString = theString.split(' ')
  for (var i = 0; i < splitString.length; i++) {
    //Cap first letter in every word and then add on the rest of the string
    theNewString = theNewString + (splitString[i].charAt(0).toUpperCase()) + (splitString[i].substring(1, splitString[i].length)) + ' '
  }
  return theNewString.substring(0, (theNewString.length) - 1)
}
capitalizeAll('hello world')
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']

function split (myString, delimiter) {
  let resultArray = []
  // becasue delimeter is 2 characters we have to search for delmeter

  let delimiterIdx = myString.indexOf(delimiter)

  //searches until finds delimiterInx
  while (delimiterIdx !== -1) {
    const chunk = myString.substring(0, delimiterIdx)
    resultArray.push(chunk)

    myString = myString.substring(chunk.length)
    myString = myString.substring(delimiter.length)

    delimiterIdx = myString.indexOf(delimiter)
  }

  resultArray.push(myString)
  return resultArray
}
split('a-b-c', '-')
