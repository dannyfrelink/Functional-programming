const data = require('./data.json');
const lodash = require('lodash');

// Lowercase antwoorden van vraag ophalen
function getLowercaseAnswers(question) {
    return data.map(answers =>
        answers[question].toLowerCase()
    );
}

// Eerste letter van woord hoofdletter geven
function capitalizeAnswers(question) {
    return data.map(answers =>
        lodash.capitalize(answers[question])
    );
}

// Aanpassing van antwoorden (gelijke benamingen)
let frontEnd;
let noIdea;
let happy;
let rich;
let doubleAnswer;

function filterAnswers() {
    frontEnd = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(front|Front)')
    );
    noIdea = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(geen|Geen)')
    );
    happy = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(blij|Gelukkig)')
    );
    rich = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('(rijk|Rijk|Welvarend|Multimiljonair)')
    );
    doubleAnswer = data.filter(answers => 
        answers['Wat wil je worden als je groot bent?'].match('( of| /)')
    );
}

filterAnswers();

function changeAnswers() {
    frontEnd.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Front-end Developer'
    );
    noIdea.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Geen idee'
    );
    happy.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Gelukkig'
    );
    rich.forEach(answer => 
        answer['Wat wil je worden als je groot bent?'] = 'Rijk'
    );
    doubleAnswer[0]['Wat wil je worden als je groot bent?'] = doubleAnswer[0]['Wat wil je worden als je groot bent?'].split(' / ').shift()
    doubleAnswer[1]['Wat wil je worden als je groot bent?'] = doubleAnswer[1]['Wat wil je worden als je groot bent?'].split(' of ').shift()

    // doubleAnswer.forEach(answer =>
    //     console.log(answer['Wat wil je worden als je groot bent?'].split(' of ' || ' / '))
    // );
}

changeAnswers();
