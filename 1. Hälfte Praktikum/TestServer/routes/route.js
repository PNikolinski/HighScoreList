var faker = require("faker");
var maxUser = 50;

var appRouter = function (app) {

    app.get("/", function (req, res) {
        res.status(200).send("Welcome to our restful API");
    });

    app.get("/user", function (req, res) {
        var data = ({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            username: faker.internet.userName(),
            email: faker.internet.email()
        })
        res.status(200).send(data)
    })

    app.get("/users/:num", function (req, res) {
        var users = []
        var num = req.params.num

        if (num < maxUser) {
            for (let i = 0; i <= num - 1; i++) {
                users.push({
                    username: faker.internet.userName(),
                    score: faker.random.number()
                })
            }
            res.status(200).send(users)
        } else{
            res.status(400).send({message: "invalid number supplied | Max Users: " + maxUser});
        }
    })


}

module.exports = appRouter;