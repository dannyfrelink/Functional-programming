const data = require('./data.json');
const lodash = require('lodash');

// Lowercase antwoorden van vraag ophalen
function getLowercaseAnswers(question) {
    return data.map(answers =>
        answers[question].toLowerCase()
    );
}

// console.log(getLowercaseAnswers('Wat wil je worden als je groot bent?'));

// Eerste letter van woord hoofdletter geven
function capitalizeAnswers(question) {
    return data.map(answers =>
        lodash.capitalize(answers[question])
    );
}

// console.log(filterAnswers('Wat wil je worden als je groot bent?'));


// console.log(capitalizeAnswers('Wat wil je worden als je groot bent?'));

// const changeAnswers = data.filter(answers => 
//     answers['Wat wil je worden als je groot bent?'].match('(front|Front)')
// );

// changeAnswers.forEach(answer => 
//     answer['Wat wil je worden als je groot bent?'] = 'Front-end Developer'
// );

// console.log(changeAnswers);

let frontEnd;
let geenIdee;


function filterAnswers() {
    frontEnd = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(front|Front)')
    );
    geenIdee = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(geen|Geen)')
    );
}

filterAnswers();

function changeAnswers() {
    frontEnd.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Front-end Developer'
    );
    geenIdee.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Geen idee'
    );
}

changeAnswers();

console.log(frontEnd);

