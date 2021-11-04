import fetch from 'node-fetch';
import countriesList from 'countries-list';
const countries = Object.values(countriesList.countries); 

const fetchData = () => {
    // Ophalen API Currency exchange rate https://rapidapi.com/exchangerateapi/api/exchangerate-api/
    fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/EUR', {
        'method': 'GET',
        'headers': {
            'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
            'x-rapidapi-key': 'd049923f05mshe1a2ad3cc776bebp102006jsnd2a7bbcc040d'
        }
    })
        .then(res => res.json())
        .then(data => {
            // European callbacks
            let europe = filterContinents(data, europeanCurrencies);
            europe = removeUndefined(europe);
            let valuesEurope = getCurrencyValues(data, europeanCurrencies);
            valuesEurope = removeUndefined(valuesEurope);
            const averageEurope = Math.round(valuesEurope.reduce((a,b) => a + b, 0) / valuesEurope.length)

            // SouthAmerican callbacks
            let southAmerika = filterContinents(data, southAmericanCurrencies);
            southAmerika = removeUndefined(southAmerika);
            let valuesSouthAmerika = getCurrencyValues(data, southAmericanCurrencies);
            valuesSouthAmerika = removeUndefined(valuesSouthAmerika);
            const averageSouthAmerika = Math.round(valuesSouthAmerika.reduce((a,b) => a + b, 0) / valuesSouthAmerika.length)

            // NorthAmerican callbacks
            let northAmerika = filterContinents(data, northAmericanCurrencies);
            northAmerika = removeUndefined(northAmerika);
            let valuesNorthAmerika = getCurrencyValues(data, northAmericanCurrencies);
            valuesNorthAmerika = removeUndefined(valuesNorthAmerika);
            const averageNorthAmerika = Math.round(valuesNorthAmerika.reduce((a,b) => a + b, 0) / valuesNorthAmerika.length)

            // African callbacks
            let africa = filterContinents(data, africanCurrencies);
            africa = removeUndefined(africa);
            let valuesAfrica = getCurrencyValues(data, africanCurrencies);
            valuesAfrica = removeUndefined(valuesAfrica);
            const averageAfrica = Math.round(valuesAfrica.reduce((a,b) => a + b, 0) / valuesAfrica.length)

            // Asian callbacks
            let asia = filterContinents(data, asianCurrencies);
            asia = removeUndefined(asia);
            let valuesAsia = getCurrencyValues(data, asianCurrencies);
            valuesAsia = removeUndefined(valuesAsia);
            const averageAsia = Math.round(valuesAsia.reduce((a,b) => a + b, 0) / valuesAsia.length)

            // Oceanian callbacks
            let oceania = filterContinents(data, oceanianCurrencies);
            oceania = removeUndefined(oceania);
            let valuesOceania = getCurrencyValues(data, oceanianCurrencies);
            valuesOceania = removeUndefined(valuesOceania);
            const averageOceania = Math.round(valuesOceania.reduce((a,b) => a + b, 0) / valuesOceania.length)
        })
        .catch(err => {
            console.error(err);
        });
}
fetchData();

// Sorteer alle currencies per continent
const sortCurrencies = continent => {
    return countries
        .filter(country => country.continent === continent)
        .map(country => country.currency.split(',').shift())
        .reduce((j, k) => j.add(k), new Set())
}

const europeanCurrencies = sortCurrencies('EU');
const southAmericanCurrencies = sortCurrencies('SA');
const northAmericanCurrencies = sortCurrencies('NA');
const africanCurrencies = sortCurrencies('AF');
const asianCurrencies = sortCurrencies('AS');
const oceanianCurrencies = sortCurrencies('OC');

// Sorteer API per continent
const filterContinents = (data, continent) => {
    return Object.keys(data.rates).map(key => {
        if(continent.has(key) && key !== 'EUR') {
            return `${key}: ${data.rates[key]}`;
        }
    });
}

// Undefined uit array verwijderen
const removeUndefined = continent => {
    return continent.filter(entry => {
        return entry !== undefined;
    });
}

// Ophalen alle waardes per continent
const getCurrencyValues = (data, continent) => {
    return Object.keys(data.rates).map(key => {
        if(continent.has(key) && key !== 'EUR') {
            return data.rates[key]
        }
    });
}