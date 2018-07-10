var express = require('express');
var bodyparser = require("body-parser")
var app = express();
var mysql = require("mysql")
const cors = require('cors');

function getConnection() {
    return mysql.createConnection({
        host: '10.111.133.60',
        port: 3306,
        user: "root",
        password: "admin1234",
        database: "HighScoreList"
    })
}

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors({
    origin: "*",
    credentials: true
}));

app.get("/", (req, res) => {
    const con = getConnection()
    const getUserString = "SELECT * FROM List ORDER BY list_user_score DESC"
    con.query(getUserString, (err, rows) => {
        if (err) {
            console.log("Select ERROR: " + err)
            res.sendStatus(404)
        } else {
            console.log("Got from List")
            res.json(rows)
        }
    })
});

app.post("/", (req, res) => {
    const con = getConnection()
    console.log("Inserting new User...")
    var newUserName = req.body.user
    var newUserScore = req.body.score * 1
    var insertString = "INSERT INTO List(list_user_name, list_user_score) VALUES ('" + newUserName + "', '" + newUserScore + "')"
    con.query(insertString, (err, rows) => {
        if (err) {
            console.log("Select ERROR: " + err)
            res.sendStatus(404)
        } else {
            console.log("Putting User into Database")
            res.send("Inserted new User")
        }
    })
})

app.delete("/", (req, res) => {
    console.log("Starting delete process")
    var id = req.body.id
    var deleteString = "DELETE FROM List WHERE id=" + id
    console.log(deleteString)
    const con = getConnection()
    con.query(deleteString, (err, rows) => {
        if (err) {
            console.log("Select ERROR: " + err)
            res.sendStatus(404)
        } else {
            console.log("Deleted User from Database")
            res.send("Deleted User, id:" + id)
        }
    })
})

var server = app.listen(4000, function () {
    console.log("Server läuft auf Port: ", server.address().port)
})