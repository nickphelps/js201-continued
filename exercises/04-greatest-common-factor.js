// Write a function "gcd" that returns the Greatest Common Divisor of two numbers
// If no GCD exists, return 1
// Greatest Common Divisor --> https://tinyurl.com/gr84qca
//
// Examples:
// gcd(5, 1) --> 1
// gcd(3, 15) --> 3
// gcd(50, 20) --> 10
function gcd (factorOne, factorTwo) {
  // finding the factors of numberOne
  let myFactorArrayOne = []

  for (let i = 0; i <= factorOne; i++) {
    if (factorOne % i === 0) {
      myFactorArrayOne.push(i)
    }
  }

  let myFactorArrayTwo = []

  for (let i = 0; i <= factorTwo; i++) {
    if (factorTwo % i === 0) {
      myFactorArrayTwo.push(i)
    }
  }

  // Calculating largest number
  const largestFactorOne = Math.max(...myFactorArrayOne)

  const largestFactorTwo = Math.max(...myFactorArrayTwo)

  console.log(myFactorArrayOne)
  console.log(myFactorArrayTwo)

  let largestArray = 0
  if (myFactorArrayOne.length > myFactorArrayTwo.length) {
    largestArray = myFactorArrayOne.length
  } else {
    largestArray = myFactorArrayTwo.length
  }


  let greatestCommonFactor = 0


    const arrayOneGcdIndex = myFactorArrayOne.indexOf(largestFactorTwo)
    console.log(arrayOneGcdIndex)
    const gcdOne = myFactorArrayOne[arrayOneGcdIndex]
    const arrayTwoGcdIndex = myFactorArrayTwo.indexOf(largestFactorOne)
    const gcdTwo = myFactorArrayTwo[arrayTwoGcdIndex]
    console.log(gcdOne)
    console.log(gcdTwo)
    console.log('!!!!!!!!!!!!!!!!!')
    console.log(gcdOne)
    console.log(gcdTwo)
  if (factorOne >= factorTwo) {
      return gcdOne
  } else {
      return gcdTwo
  }

}
gcd(50, 20)
 