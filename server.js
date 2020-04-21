var cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

const allCountries = require('all-countries');
let countries = allCountries.all.map(countryName => countryName.toLowerCase());

const cities = require('all-the-cities');
let citiesNames = [];
cities.filter(city => {
    citiesNames.push(city.name.toLowerCase())
})

app.get('/isCountry', (req, res) => {
    let countryName = req.query.countryName;
    res.send({"isCountry" : countries.includes(countryName.toLocaleLowerCase())})
});

app.get('/isCity', (req, res) => {
    let cityName = req.query.cityName;
    res.send({"isCity" : citiesNames.includes(cityName.toLocaleLowerCase())})
});

app.listen(port, () => console.log(`Listening on port ${port}`));