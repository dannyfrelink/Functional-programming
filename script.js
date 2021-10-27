const data = require('./data.json');
const lodash = require('lodash');

const futureJob = 'Wat wil je worden als je groot bent?';

// Antwoorden van vraag ophalen
// const answersFutureJob = data.map(answers =>
//     answers[futureJob]
// );

// // Eerste letter van woord hoofdletter geven
// const capitalizeJob = data.map(word => 
//     lodash.capitalize(word[futureJob])
// );

// console.log(capitalizeJob);


function getAnswers(question) {
    data.map(answers =>
        answers[question]
    );
}

console.log(getAnswers('Wat wil je worden als je groot bent?'));