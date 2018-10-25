// Write a function "recognizeEmployees" that takes two arguments:
// 1) an array of names of people to be recognized
// 2) an array of employees of the month
// Return an array telling everyone that they did a great job, except employees
// of the month did an outstanding job.
//
// Examples:
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Bill', 'Susan'])
// > ['Outstanding job, Susan!', 'Great job, Anthony!', 'Outstanding job, Bill!']
//
// recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Jennifer', 'Dylan'])
// > ['Great job, Susan!', 'Great job, Anthony!', 'Great job, Bill!']
//
// Hint: What is the best data structure for the employees of the month list?

function recognizeEmployees (recognized, outstanding) {

    // console.assert(recognized[0] === 'Susan', 'Susan should be the first item in the array')

    const greatEmployees = []

    greatEmployees.push(recognized, outstanding)

    //prints the first array and the second index of the first array
    console.log('~~~~~~~~~~~~~~~~~')
    // console.log( greatEmployees[0].length )
    // console.log( greatEmployees[0][0] )
    console.log( (greatEmployees[1][0].length) )
    const greatConstString = 'Great job, '
    const outstandingConstString = 'Outstanding job, '
    let greatString = ''
    let outstandingString = ''
    let theOutstandingEmployeeArray = []
    
    //searching and combining arrays
    for (let count = 0; count < (greatEmployees[1][0].length) - 3; count++) {

        if (greatEmployees[0][0] === greatEmployees[1][count]) {
            console.log('Entered If')
            theOutstandingEmployeeArray = theOutstandingEmployeeArray + greatEmployees[1][count]
            // console.log(count)
        } else {
            console.log('No match')
        }

    }//for

console.log(theOutstandingEmployeeArray)

    // for (let i = 0; i < greatEmployees[0].length; i++) {
    //     greatString = greatString + greatConstString + greatEmployees[0][i] + '! '
    //         for (i; i < (greatEmployees[0][0].length) - 3; i++) {
    //             // if ()
    //         }
    // }
    // console.log(greatString)
    
}
recognizeEmployees(['Susan', 'Anthony', 'Bill'], ['Anthony'])