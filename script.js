import fetch from 'node-fetch';
import countriesList from 'countries-list';
const countries = Object.values(countriesList.countries); 

// https://rapidapi.com/exchangerateapi/api/exchangerate-api/
fetch('https://exchangerate-api.p.rapidapi.com/rapid/latest/EUR', {
	'method': 'GET',
	'headers': {
		'x-rapidapi-host': 'exchangerate-api.p.rapidapi.com',
		'x-rapidapi-key': 'd049923f05mshe1a2ad3cc776bebp102006jsnd2a7bbcc040d'
	}
})
    .then(res => res.json())
    .then(data => {
        // console.log(data.rates)
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

        console.log(asia)
    })
    .catch(err => {
        console.error(err);
    });
