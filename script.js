import fetch from 'node-fetch';
import countriesList from 'countries-list'
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
        let southAmerika = [];
        let northAmerika = [];
        let europe = [];
        let afrika = [];
        let asia = [];
        let oceania = [];
        let antartica = [];

        countries.forEach(country => {
            const currencies = country.currency.split(',').shift();

            switch(country.continent) {
                case 'SA':
                    southAmerika.push(currencies)
                    break;
                case 'NA':
                    northAmerika.push(currencies)
                    break;
                case 'EU':
                    europe.push(currencies)
                    break;
                case 'AF':
                    afrika.push(currencies)
                    break;
                case 'AS':
                    asia.push(currencies)
                    break;
                case 'OC':
                    oceania.push(currencies)
                    break;
                case 'AN':
                    antartica.push(currencies)
                    break;
            }

            // if(country.continent === 'SA') {
            //     allCurrencies.push(country.currency)
            // }
            // allCurrencies.push(country.currency);

            // const test = Object.keys(data.rates).forEach(key => {
            //     console.log(key)
            // });
        });

        // function removeDuplicates(continent) {
        //     return continent = [...new Set(continent)]
        // }

        // removeDuplicates(southAmerika)
        // removeDuplicates(northAmerika)
        // removeDuplicates(europe)
        // removeDuplicates(afrika)
        // removeDuplicates(asia)
        // removeDuplicates(oceania)
        // removeDuplicates(antartica)



        southAmerika = [...new Set(southAmerika)];
        northAmerika = [...new Set(northAmerika)];
        europe = [...new Set(europe)];
        afrika = [...new Set(afrika)];
        asia = [...new Set(asia)];
        oceania = [...new Set(oceania)];
        antartica = [...new Set(antartica)];

        // console.log(europe)

    })
    .catch(err => {
        console.error(err);
    });




// const express = require('express');
// const app = express();
// const port = 5555;
// const data = require('./data.json');
// const lodash = require('lodash');

// app.use(express.static('public'));
// app.set('view engine', 'ejs');

// // Lowercase antwoorden van vraag ophalen
// function getLowercaseAnswers(question) {
//     return data.map(answers =>
//         answers[question].toLowerCase()
//     );
// }

// // Eerste letter van woord hoofdletter geven
// function capitalizeAnswers(question) {
//     return data.map(answers =>
//         lodash.capitalize(answers[question])
//     );
// }

// // Functie met alle opschoning van de data
// let cleanData = () => {
//     // Filter alleen antwoorden van één vraag
//     let dataSet = data.map((data) => {
//         return data['Wat wil je worden als je groot bent?'];
//     });
    
//     // Pas alle antwoorden aan
//     return changedData = dataSet.map((data) => {
//         if (typeof data === 'string' && data.length > 1) {
//             data = data
//                 .toLowerCase()
//                 .replace(/[^\w\s]/gi, '')
//                 .replace('frontend', 'front-end')
//                 .replace(/code designer|front-ender|webdeveloper  webdesigner/gi, 'front-end developer')
//                 .replace('lead bij een design agency of zelfstandig ondernemer', 'ondernemer')
//                 .replace(/geen idee we zien wel hoe het loopt|geen idee/gi, 'geen antwoord')
//                 .replace(/rijk|multimiljonair/gi, 'welvarend')
//                 .replace('blij', 'gelukkig')
//                 .replace('fietsen maken', 'fietsenmaker');
//                 return data.charAt(0).toUpperCase() + data.slice(1);
//         } else {
//             return 'Geen antwoord';
//         }
//     });
// };

// cleanData();

// // // https://thewebdev.info/2021/05/15/how-to-count-duplicate-values-in-an-array-in-javascript/
// // const counts = {};
// // changedData.forEach((x) => {
// //     counts[x] = (counts[x] || 0) + 1;
// // });

// // let frontEnd = lodash.pick(counts, ['Front-end developer']);
// // let happy = lodash.pick(counts, ['Gelukkig']);
// // let rich = lodash.pick(counts, ['Welvarend']);
// // let successful = lodash.pick(counts, ['Succesvol'])
// // let entrepreneur = lodash.pick(counts, ['Ondernemer'])
// // let noAnswer = lodash.pick(counts, ['Geen antwoord']);
// // let other = lodash.pick(counts, ['Vader', 'Full time kunnen reizen', 'Astronaut', 'Fietsenmaker', 'Zanger', 'Tattoo artiest', 'Klein']);

// // console.log(happy)

// // frontEnd = Object.values(frontEnd);
// // happy = Object.values(happy);
// // rich = Object.values(rich);
// // successful = Object.values(successful)
// // entrepreneur = Object.values(entrepreneur)
// // noAnswer = Object.values(noAnswer);
// // other = Object.values(other);

// // // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
// // const reducer = (previousValue, currentValue) => previousValue + currentValue;
// // other = other.reduce(reducer)

// // const test = changedData.reduce((total, data) => {
// //     // total + data.match('Front')
// //     console.log(data.match('Front'))
// // }, 0)

// const test = changedData.reduce((b,c)=>((b[b.findIndex(d=>d.el===c)]||b[b.push({el:c,count:0})-1]).count++,b),[]);

// // test.forEach(test2 => {
// //     return hallo = test2
// // })

// console.log(test[0].el)


// // const test = changedData.reduce((total, currentValue) => {
// //     if(typeof total[currentValue] !== "undefined"){
// //       total[currentValue]++; 
// //       return total;
// //     } else {
// //         total[currentValue]=1; 
// //         return total;
// //     }
// // }, {});

// // var test2 = [];
// // for(var x in changedData){
// //     test2.push(x + ": " + changedData[x]);
// // }

// // console.log(test2);





// // const test = changedData.filter(answers => 
// //     answers.match('Front')
// //     // console.log(match)
// // );

// // const filterData = (match) => {
// //    changedData.filter(answers => 
// //        answers.match(match)
// //    );
// // }

// // console.log(filterData('"Front"'));

// app.get('/', async (req, res) => {
// 	res.render('index', {
//         test
//     });
// });

// app.use(function (req, res) {
// 	res.status(404).send('Sorry, could not find this page.');
// });

// app.listen(port, () => {
// 	console.log(`Listening on port: ${port}`);
// });