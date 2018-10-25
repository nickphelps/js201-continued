// Write a function "max" that takes an array of numbers returns the highest
// number in the array.

function max (myArray) {
    if (myArray == false) {
        return 0
    } else {
    const largestArrayValue = Math.max(...myArray)
    return largestArrayValue
    }
}
max([])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which takes an array of numbers and returns a
// new array containing only the positive numbers in the given array.

function positives (myArray) {
    let positiveArray = []
    for (let i = 1; i <= myArray.length; i++) {
        if (myArray[i] > 0) {
            positiveArray.push(myArray[i]) 
        }
    }
return positiveArray
}
positives([-1,-2,-3,0,1000]) 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
function evens (myArray) {

      const evenAry = []

      for (let i = 0; i <= myArray.length; i++) {
        if (myArray[i] % 2 == 0) {
            evenAry.push(myArray[i])
          }  
      }//For

      return evenAry
}
evens ([1,2,3,4,5])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
function odds (myArray) {

    const oddAry = []

    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] % 2 !== 0) {
            oddAry.push(myArray[i])
        }
    }//For
return oddAry
}
odds ([1,2,3,4,5])


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]

function integers (myArray) {
    const wholeAry = []
    
    for (let i = 0; i < myArray.length; i++) {

        if (Number.isInteger(myArray[i]) === true) {
            wholeAry.push(myArray[i])
        }
    }
    return wholeAry
}
integers([3.14, 2.4, 7, 8.1, 2]) 

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
function squareDance (myArray) {
    squareArray = []
    for (let i = 0; i < myArray.length; i++) {
        squareArray.push(myArray[i] * myArray[i])
    }
return squareArray
}
console.log( squareDance([1,2,3]) )
