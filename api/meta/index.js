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

var port = process.env.PORT || 2456;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:2456/api/meta/user)
router.get('/user', function(req, res) {
    res.json(
        { 
            name: 'user',
            text: 'User',
            fields : [
                {
                    name: 'id',
                    text: 'Id',
                    type: 'number',
                    readonly: true
                },
                {
                    name: 'email',
                    text: 'Email',
                    type: 'string'
                },
                {
                    name: 'title',
                    text: 'Title',
                    type: 'option',
                    values: [
                        'Mr.',
                        'Ms.',
                        'Miss.',
                        'Dr.'
                    ]
                },
                {
                    name: 'firstname',
                    text: 'First Name',
                    type: 'string'
                },
                {
                    name: 'lastname',
                    text: 'Last Name',
                    type: 'string'
                },
                {
                    name: 'active',
                    text: 'IsActive',
                    type: 'bool'
                },
                {
                    name: 'aboutme',
                    text: 'About Me',
                    type: 'mstring'
                },
                {
                    name: 'createdby',
                    text: 'Created By',
                    type: 'ref'
                },
                {
                    name: 'updatedby',
                    text: 'Updated By',
                    type: 'ref'
                },
                {
                    name: 'updateddate',
                    text: 'Updated Date',
                    type: 'date'
                },
                {
                    name: 'createddate',
                    text: 'Created Date',
                    type: 'date'
                }
            ],
            layouts: [
                {
                    name: 'default'
                }
            ]
        }
    );   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api/meta', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);