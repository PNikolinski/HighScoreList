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

//Give app the power to read json
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
//Permission: Who can connect to API/Database
app.use(cors({
    origin: "*",
    credentials: true
}));

// Get every single row out of database
app.get("/", (req, res) => {
    const con = getConnection()
    const getUserString = "SELECT * FROM List ORDER BY list_user_score DESC"
    con.query(getUserString, (err, rows) => {
        //If there is an error then send error message
        if (err) {
            console.log("Select ERROR: " + err)
            res.sendStatus(404)
        } else {
            console.log("Got from List")
            res.json(rows)
        }
    })
});

//Put new User into Database
app.post("/", (req, res) => {
    const con = getConnection()
    console.log("Inserting new User...")
    var newUserName = req.body.user
    var newUserScore = req.body.score * 1
    var insertString = "INSERT INTO List(list_user_name, list_user_score) VALUES ('" + newUserName + "', '" + newUserScore + "')"
    con.query(insertString, (err, rows) => {
        //If there is an error then send error message
        if (err) {
            console.log("Insert ERROR: " + err)
            res.sendStatus(404)
        } else {
            console.log("Putting User into Database")
            res.send("Inserted new User")
        }
    })
})

// Delete user from database
app.delete("/", (req, res) => {
    console.log("Starting delete process")
    var id = req.body.id
    var deleteString = "DELETE FROM List WHERE id=" + id
    console.log(deleteString)
    const con = getConnection()
    //If there is an error then send error message
    con.query(deleteString, (err, rows) => {
        if (err) {
            console.log("Delete ERROR: " + err)
            res.sendStatus(500)
        } else {
            console.log("Deleted User from Database")
            res.send("Deleted User, id:" + id)
        }
    })
})

// Update user score
app.patch("/", (req, res) => {
    console.log("Updating user...")

    var deleteString = "UPDATE List SET list_user_score='" + req.body.score + "' WHERE id='" + req.body.id +"'"
    console.log(deleteString)
    const con = getConnection()
    con.query(deleteString, (err, rows) => {
        //If there is an error then send error message
        if (err) {
            console.log("Update ERROR: " + err)
            res.sendStatus(409)
        } else {
            console.log("Updated User from Database")
            res.send("Updated User: " + req.body.user)
        }
    })
})

var server = app.listen(4000, function () {
    console.log("Server läuft auf Port: ", server.address().port)
})