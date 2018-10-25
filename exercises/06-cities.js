// Write a function "coolCities" which takes an array of city Objects like such:
// var cities = [
//   { name: 'Los Angeles', temperature: 60.0},
//   { name: 'Atlanta', temperature: 52.0 },
//   { name: 'Detroit', temperature: 48.0 },
//   { name: 'New York', temperature: 80.0 }
// ];
// and returns a new array containing only those cities whose temperature is
// cooler than 70 degrees.

function coolCities () {

    const cityArray = ['Los Angeles', 'Atlanta', 'Detroit', 'New York']
    const tempArray = [60.0, 52.0, 48.0, 80.0]
    const completeArray = []

    for (let i = 0; i < cityArray.length; i++) {
        if (tempArray[i] < 70) {
            completeArray.push(['"name": ' + cityArray[i] + ', tempeature: ' + tempArray[i]])
        }
    }
    console.log(completeArray)
return completeArray

}
coolCities([
     { name: 'Los Angeles', temperature: 60.0},
     { name: 'Atlanta', temperature: 52.0 },
     { name: 'Detroit', temperature: 48.0 },
     { name: 'New York', temperature: 80.0 }
    ])

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "cityNames" which takes an array of city objects like the
// above problem and returns an array of the cities names.

function cityNames () {

}
cityNames()