var express = require('express');
var bodyparser = require("body-parser")
var app = express();
var mysql = require("mysql")
const cors = require('cors');
const con = getConnection()
var tempArray = []


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
// Currently everyone because of the *
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
        if (err || rows.length < 1) {
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
    const getGameDescr = "SELECT * FROM ListGameData WHERE gameID = ?"
    const getGame = "SELECT * FROM userGameData WHERE gameID = ?"
    const getPlayer = "SELECT * FROM ListUserData"
    var temp = []
    // Search if the game is in the database
    con.query(getGameDescr, gameID, (errGameDescr, gameDescr) => {
        if (errGameDescr || gameDescr.length < 1) {
            res.status(404).send("Sorry, but it seems like that your required game is not here :(")
        } else {
            temp[0] = { gameName: gameDescr[0].gameName, gameDescr: gameDescr[0].gameDescr }
            // Search if someone is linked to specific game
            con.query(getGame, gameID, (errGame, gameInfoScore) => {
                if (errGame || gameInfoScore.length < 1) {
                    res.status(404).send("Sorry, but it seems like nobody has played this game yet :(")
                } else {
                    // Search if someone has a score for that game
                    con.query(getPlayer, (errPlayer, gamePlayerInfo) => {
                        if (errPlayer || gamePlayerInfo.length < 1) {
                            res.send(404).send("Sorry, but it seems like nobody has a score yet :(")
                        } else {
                            for (let i = 0; i < gameInfoScore.length; i++) {
                                temp[i + 1] = { playerName: gamePlayerInfo[i].userName, playerScore: gameInfoScore[i].userScore }
                            }
                            res.send(temp)
                        }
                    })
                }

            })
        }

    })



})
// Post new Game into Database
app.post("/games", (req, res) => {
    const gameName = req.body.gameName
    const gameDesc = req.body.gameDesc
    if (gameName === "" && gameDesc === "") {
        res.status(400).send("Please enter a valid game name")
    } else {
        const updateGame = "INSERT INTO ListGameData (gameID, gameName, gameDescr) VALUES ('NULL','" + gameName + "', '" + gameDesc + "')"
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
// Enter a score for a new game
app.post("/games/:gameID/:playerID", (req, res) => {
    const gameID = req.params.gameID
    const playerID = req.params.playerID
    const userScore = req.body.score
    if (isNaN(gameID) || isNaN(playerID) || isNaN(userScore)) {
        res.status(400).send("Please select a game or player out of our database!")
    } else {
        /*
            query(Select with player- and gameID) to check if there is already an entry
            if yes then break
            else Insert new value
        */
        const selectEverything = "SELECT * FROM userGameData WHERE gameID = ? AND playerID = ?"
        con.query(selectEverything, [gameID, playerID], (err, rows) => {
            if (rows.length === 1) {
                res.status(409).send("There is already a score for that user!")
            } else {
                const insertNewScore = "INSERT INTO userGameData (id, gameID, playerID, userScore) VALUES(Null,'?','?','?')"
                con.query(insertNewScore, [gameID, playerID, userScore], (errUpdate) => {
                    if (errUpdate) {
                        res.status(500).send("Somebody stood on the cable, please try again")
                    } else {
                        res.send(console.log("Successfully inserted new score :)"))
                    }
                })
            }

        })
    }
})
// Update someones score
app.post("/games/:gameID/:playerID", (req, res) => {
    const gameID = req.params.gameID
    const playerID = req.params.playerID
    const userScore = req.body.score
    if (isNaN(gameID) || isNaN(playerID) || isNaN(userScore)) {
        res.status(400).send("Please select a game or player out of our database!")
    } else {
        const updateUserScore = "UPDATE userGameData SET userScore = ? WHERE playerID = ? AND gameID = ?"
        con.query(updateUserScore, [userScore, playerID, gameID], (updateErr) => {
            if (updateErr) {
                res.status(409).send("Sorry, someone in the background made a mistake, please re-enter your informations!")
            } else {
                res.status(200).send("Successfully updated your userscore")
            }
        })
    }
})
//Delete a game
app.delete("/games/:gameID", (req, res) => {
    const gameID = req.params.gameID
    if (isNaN(gameID)) {
        res.status(409).send("Please enter a game, that is in the database")
    } else {
        const deleteGame = "DELETE FROM ListGameData WHERE gameID = ?"
        con.query(deleteGame, gameID, (err) => {
            if (err) {
                res.send(500).send("Delete a game that is in our database")
            } else {
                res.send("Successfully deleted game")
            }
        })
    }
})
// Delete a user
app.delete("/user/:playerID", (req, res) => {
    console.log("Test")
    const playerID = req.params.playerID
    if (isNaN(playerID)) {
        res.status(409).send("Please enter an user, that is in the database")
    } else {
        const deleteUser = "DELETE FROM ListUserData WHERE playerID = ?"
        con.query(deleteUser, playerID, (err) => {
            if (err) {
                res.send(500).send("Please delete a user that is in our database")
            } else {
                res.send("Successfully deleted user")
            }
        })
    }
})

//+++++++++++++++++++++++++++++++++

var server = app.listen(4000, function () {
    console.log("Server läuft auf Port: ", server.address().port)
})