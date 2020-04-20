const cities = require('all-the-cities');

let citiesNames = [];

cities.filter(city => {
    citiesNames.push(city.name)
})

console.log(citiesNames)