const express = require('express');
const app = express();
const hbs = require('hbs');
// Require the bodyparser middleware and use it on the app
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

function fakeMiddleware(req, res, next) {
    req.secret = 'Exemplo Ex Test Exemp Exe'
    console.log('fake middleware was called');
    next();
}

app.use(fakeMiddleware);

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');



app.get('/', (req, res, next) => {
    res.render('index')
});

// Route Params
app.get('/user/:username', (req, res, next) => {
    res.send(req.params);
});
app.get('/user/:username/books/:id', (req, res, next) => {
    res.send(req.params);
});

// Query Params / Query String
app.get('/search', (req, res, next) => {
    res.send(req.query);
});

app.get('/login', (req, res, next) => {
    res.render('login');
});

app.post('/login', (req, res, next) => {
    // let { username, password} = req.body;
    // res.send(req.body); // usamos o send para enviar "info" para o front-end
    //res.redirect('/'); // usamos o redirect para fazer um redirect quando o post for usado, entao ele seria para mandar a pessoa pra outra pagina
});

app.get('/test', (req, res, next) => {
    res.send(req.secret);
});


// Create a get route /movies that renders a movies.hbs - form with get method and action - /collection
// Title - text, Rating - number, Genre - text, Duration - number, Release-Date - date
// get /collection - extract info you got from the form
// Render a collection.hbs where you display that info (that you get from the get request)

app.get('/movies', (req, res, next) => {
    res.render('movies');
});
app.get('/collection', (req, res, next) => {
    console.log(req.query);
    res.render('collection', req.query);
});


app.listen(3000, () => console.log('App listening on port 3000'));
