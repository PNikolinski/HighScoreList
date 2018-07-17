var express = require('express')
var app = express()
var faker = require('faker')


var coordinateArray = []

for (let i = 0; i < 15; i++) {
    coordinateArray.push({})
    
}

app.get("/", (req, res) => {
    res.send(coordinateArray[counter++])
})

app.listen(4000, console.log("Server listen"))