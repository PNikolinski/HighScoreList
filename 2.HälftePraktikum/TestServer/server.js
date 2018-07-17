var express = require('express');
var bodyparser = require("body-parser")
var app = express();
var mysql = require("mysql")
const cors = require('cors');
const con = getConnection()

function getConnection() {
    return mysql.createConnection({
        host: '10.111.133.60',
        port: 3306,
        user: "root",
        password: "admin1234",
        database: "HighScoreList"
    })
}

//Give app the power to read json
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
//Permission: Who can connect to API/Database
app.use(cors({
    origin: "*",
    credentials: true
}));

//+++++++++++++++++++++++++++++++++
// Getting all games from database table ListGameData
app.get("/games", (req, res) => {
    const getGames = "SELECT * FROM ListGameData"
    con.query(getGames, (err, rows) => {
        console.log(rows)
        if (err ||  rows.length === 0) {
            console.log("No Games in Database: " + err)
            res.status(404).send("Sorry no games in here :(")
        } else {
            console.log("Getting games from list...")
            res.json(rows)
        }
    })
});
// Getting specific game from database table ListGameData
app.get("/games/:gameID", (req, res) => {
    const gameID = req.params.gameID
    const getGame = "SELECT * FROM UserGameData WHERE gameID= '" + gameID + "'"
    con.query(getGame, (err, row) => {
        console.log(row)
        if (err || row.length === 0) {
            console.log("Specific Game is not in Database!")
            res.status(404).send("Sorry, your required game is not here :(")
        } else {
            console.log("Getting specific game from Database ...")
            res.json(row)

        }
    })
})
// Post new Game into Database
app.post("/games", (req, res) => {
    const gameName = req.body.gameName
    if (gameName === "") {
        res.status(400).send("Please enter a valid game name")
    } else {
        const updateGame = "INSERT INTO ListGameData (gameID, gameName) VALUES ('NULL','" + gameName + "')"
        con.query(updateGame, (err, row) => {
            if (err) {
                res.status(409).send("Game already in database")
            } else {
                console.log("Inserting new Game, please wait...")
                res.status(200).send("Successfully inserted new Game")
            }
        })
    }
})









//+++++++++++++++++++++++++++++++++

var server = app.listen(4000, function () {
    console.log("Server läuft auf Port: ", server.address().port)
})