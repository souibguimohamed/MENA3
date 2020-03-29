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
        let error = { error: 12, message: "Verifiw l username" };
        res.status(200).end(JSON.stringify(error)); // to be solved
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
    const { username, password, name, tel, poids, dateNaiss, genre, taille, addr } = req.body;
    //test 3al user
    if ((username === 'undefined' || typeof(username) !== "string" || username.match(/^[a-zA-ZéèçàÂÊÎÔÛÄËÏÖÜÀÇÉ]{4,12}$/g) === null) &&
        (password === 'undefined' || typeof(password) !== string || password.match(/^.{7,}$/g) === null) &&
        (name === 'undefined' || typeof(name) !== string || name.match(/^\D{4,20}/g) === null) &&
        (tel === 'undefined' || typeof(tel) !== number || tel < 10000000 || tel > 99999999) &&
        (poids === 'undefined' || typeof(poids) !== number || poids > 500 || poinds < 1) &&
        (dateNaiss === 'undefined' || typeof(dateNaiss) !== string || dateNaiss.match(/^\d{2}\/\d{2}\/\d{4}$/g) === null) &&
        (genre === 'undefined' || typeof(genre) !== string || (genre === "male" || genre === "female")) &&
        (taille === 'undefined' || typeof(taille) !== number || taille > 2.51 || taille < 0.62) &&
        (addr === 'undefined' || typeof(addr) !== string)) {
        let error = { message: "Re-Check Informations" };
        res.end(JSON.stringify(error)); // to be solved
        console.log("done")
    }
    //test unique username

    //insert to database

    //test username in database

    // return the result
    res.status(200).send(true).end();
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