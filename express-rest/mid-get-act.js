/*  Activity Name: mid-get-act.js
    Author Name: Bondoc, Raquel Ann P.
    Section and Code: WD - 202 / 2083*/

const express = require('express');
const app = express();

//ARRAY FOR GET METHOD
const movies = [{
    id: 1,
    title: 'Superman'
},
{
    id: 2,
    title: 'Thor'
},
{
    id: 3,
    title: 'Iron Man'
}
];

//GET ALL MOVIES
app.get('/api/movies', (req, res) => {
    res.send(movies);
});

//GET MOVIE BY ID
app.get('/api/movies/:id', (req, res) => {
    const movie = movies.find(h => h. id === parseInt(req.params.id));
    if (!movie) return res.status(404).send('The movie with given ID was not found.');
    res.send(movie);
});

app.listen(3004, () => console.log('Listening on port 3004'));