var mysql = require("mysql")

export var connection = mysql.createConnection({
    host: '10.111.133.60',
    port: 3306,
    user: "root",
    password: "admin1234",
    database: "HighScoreList"
})

