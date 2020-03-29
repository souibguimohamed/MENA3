const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
/* POST: localhost:3000/connect
    Params: {
        "usename":"test",
        "password":"test"
    }
    return :
    if valide return true
    else false
*/
app.post('/connect', function(req, res) {
    const { username, password } = req.body;
    //test 3al user
    if (username.match(/^\D{4,12}$/g) === null) {
        return false; // to be solved
    }
    //test 3al password
    if (password.match(/^.{7,}$/g) === null) {
        return false; // to be solved
    }
    //send to database

    //return the correct value true/false
    res.end();
});
//----------------------------------
/*  TODO: Adding Username/Password
    POST: localhost:3000/inscription
    Params: {
        "usename":"string" 4-16/alphabetique,
        "password":"string",
        "name":"string",
        "tel":"number",
        "poids":"number",
        "dateNaiss":"string",
        "genre":"number",
        "taille":"number",
        "addr":"string",
    }
    return :
    if valide return true
    else false
*/
app.post('/inscription', function(req, res) {
    //test data
    //test unique username
    //insert to database
    //test username in database
    // return the result
});
/*  POST: localhost:3000/question
    oui : 1 / non : 0
    Params: {
        QuestionTab:[]
    }
    return:
        return true/false
*/
//----------------------------------
app.post('/question', (req, res) => {
    // test 3al tabQ lezem lkolhom ya 0 ya 1
    // evaluation des reponses
    //return true / false
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000!')
});