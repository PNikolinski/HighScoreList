const express = require('express')
const app = express()

app.locals.title = "Server"

app.get('/getliste', function (req, res) {
    res.send('Hierrüber bekommt man die HighscoreListe!}')
})
app.post('/', function (req, res) {
    res.send("Got something")
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))