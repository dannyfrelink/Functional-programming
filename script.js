const express = require('express');
const app = express();
const port = 5555;
const data = require('./data.json');
const lodash = require('lodash');

app.use(express.static('public'));
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

// Functie met alle opschoning van de data
let cleanData = () => {
    // Filter alleen antwoorden van één vraag
    let dataSet = data.map((data) => {
        return data['Wat wil je worden als je groot bent?'];
    });
    
    // Pas alle antwoorden aan
    return changedData = dataSet.map((data) => {
        if (typeof data === 'string' && data.length > 1) {
            data = data
                .toLowerCase()
                .replace(/[^\w\s]/gi, '')
                .replace('frontend', 'front-end')
                .replace(/code designer|front-ender|webdeveloper  webdesigner/gi, 'front-end developer')
                .replace('lead bij een design agency of zelfstandig ondernemer', 'ondernemer')
                .replace(/geen idee we zien wel hoe het loopt|geen idee/gi, 'geen antwoord')
                .replace(/rijk|multimiljonair/gi, 'welvarend')
                .replace('blij', 'gelukkig')
                .replace('fietsen maken', 'fietsenmaker');
                return data.charAt(0).toUpperCase() + data.slice(1);
        } else {
            return 'Geen antwoord';
        }
    });
};

cleanData();

console.log(changedData);

app.get('/', async (req, res) => {
	res.render('index', {
        frontEnd,
        happy,
        rich,
        noIdea,
        successful,
        other
    });
});

app.use(function (req, res) {
	res.status(404).send('Sorry, could not find this page.');
});

app.listen(port, () => {
	console.log(`Listening on port: ${port}`);
});