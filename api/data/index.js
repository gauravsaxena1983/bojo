// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors = require('cors');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 2457;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

data = [
    {
        id: '1',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    },{
        id: '2',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    },{
        id: '3',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    },{
        id: '4',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    },{
        id: '5',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    },{
        id: '6',
        email: 'gsaxena@test.com',
        firstname: 'Gaurav',
        lastname: 'Saxena',
        active: true,
        title: 'Mr.',
        aboutme: 'I Live in Pune.\nAnd from Gwalior.',
        createdby: null,
        updatedby: null,
        updateddate: new Date(1995, 11, 17),
        createddate: new Date(1995, 11, 17)
    }
];

// test route to make sure everything is working (accessed at GET http://localhost:2457/api/data/user)
router.get('/user', function(req, res) {
    res.json(
        {
            list: data
        }
    );   
});

router.get('/user/:id', function(req, res) {
    res.json(
        data.filter( function(user){
            return user.id === req.params.id;
        })[0]
    );   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/data', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);