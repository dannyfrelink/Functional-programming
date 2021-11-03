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
            // console.log(data.rates);

            europe = filterContinents(data, europe);
            europe = removeUndefined(europe);
            console.log(europe);


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


const filterContinents = (data, continent) => {
    Object.keys(data.rates).map(key => {
        if(continent.has(key) && key !== 'EUR') {
            return `${key}: ${data.rates[key]}`;
            // console.log(`${key}: ${data.rates[key]}`)
        }
    });
}

const removeUndefined = continent => {
    continent.filter(entry => {
        return entry !== undefined;
    });
}


// Sorteer API per continent
// europe = Object.keys(data.rates).map(key => {
//     if(europe.has(key) && key !== 'EUR') {
//         return `${key}: ${data.rates[key]}`;
//     }
// });

// europe = europe.filter(entry => {
//     return entry !== undefined;
// });


