import fetch from 'node-fetch';
import countriesList from 'countries-list';
const countries = Object.values(countriesList.countries); 

// Ophalen API Currency exchange rate https://rapidapi.com/exchangerateapi/api/exchangerate-api/
const dataOphalen = () => {
    fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/EUR', {
        'method': 'GET',
        'headers': {
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
            'x-rapidapi-key': 'd049923f05mshe1a2ad3cc776bebp102006jsnd2a7bbcc040d'
        }
    })
        .then(res => res.json())
        .then(data => {
            europe = filterContinents(data, europe);
            europe = removeUndefined(europe);

            southAmerika = filterContinents(data, southAmerika);
            southAmerika = removeUndefined(southAmerika);

            northAmerika = filterContinents(data, northAmerika);
            northAmerika = removeUndefined(northAmerika);

            africa = filterContinents(data, africa);
            africa = removeUndefined(africa);

            asia = filterContinents(data, asia);
            asia = removeUndefined(asia);

            oceania = filterContinents(data, oceania);
            oceania = removeUndefined(oceania);
        })
        .catch(err => {
            console.error(err);
        });
}
dataOphalen();

// Verdelen van alle valuta's per continent
let europe = countries
    .filter(country => country.continent === 'EU')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

let southAmerika = countries
    .filter(country => country.continent === 'SA')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

let northAmerika = countries
    .filter(country => country.continent === 'NA')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

let africa = countries
    .filter(country => country.continent === 'AF')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

let asia = countries
    .filter(country => country.continent === 'AS')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

let oceania = countries
    .filter(country => country.continent === 'OC')
    .map(country => country.currency.split(',').shift())
    .reduce((j, k) => j.add(k), new Set())

// Sorteer API per continent
const filterContinents = (data, continent) => {
    return Object.keys(data.rates).map(key => {
        if(continent.has(key) && key !== 'EUR') {
            return `${key}: ${data.rates[key]}`;
            // console.log(`${key}: ${data.rates[key]}`)
        }
    });
}

// Undefined uit array verwijderen
const removeUndefined = continent => {
    return continent.filter(entry => {
        return entry !== undefined;
    });
}