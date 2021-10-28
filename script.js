const express = require('express');
const app = express();
const port = 5555;
const data = require('./data.json');
const lodash = require('lodash');

// app.use(express.static('public'));
app.set('view engine', 'ejs');

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

// Aanpassing van soortgelijke antwoorden
let frontEnd;
let noIdea;
let happy;
let rich;
let doubleAnswer;

const capitalizedAnswers = data.map(answers =>
    lodash.capitalize(answers['Wat wil je worden als je groot bent?'])
);

function filterAnswers() {
    frontEnd = capitalizedAnswers.filter(answers => 
        answers.match('Front')
    );
    noIdea = capitalizedAnswers.filter(answers => 
        answers.match('Geen')
    );
    happy = capitalizedAnswers.filter(answers => 
        answers.match('(Blij|Gelukkig)')
    );
    rich = capitalizedAnswers.filter(answers => 
        answers.match('(Rijk|Welvarend|Multimiljonair)')
    );
    doubleAnswer = capitalizedAnswers.filter(answers => 
        answers.match('( of | / )')
    );
}

filterAnswers();

function changeAnswers() {
    for(var i = 0; i < frontEnd.length; i++){
        frontEnd[i] = 'Front-end Developer';
    }
    for(var i = 0; i < noIdea.length; i++){
        noIdea[i] = 'Geen idee';
    }
    for(var i = 0; i < happy.length; i++){
        happy[i] = 'Gelukkig';
    }
    for(var i = 0; i < rich.length; i++){
        rich[i] = 'Rijk';
    }

    doubleAnswer[0] = doubleAnswer[0].split(' / ').shift()
    doubleAnswer[1] = doubleAnswer[1].split(' of ').shift()

    // doubleAnswer.forEach(answer =>
    //     answer['Wat wil je worden als je groot bent?'].split(' of ' || ' / ').shift()
    // );
}

changeAnswers();

app.get('/', async (req, res) => {
	res.render('index', {
        frontEnd,
        happy,
        rich,
        noIdea
    });
});

app.use(function (req, res) {
	res.status(404).send('Sorry, could not find this page.');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});