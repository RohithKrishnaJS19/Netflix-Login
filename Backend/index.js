var express = require("express")
var cors = require("cors")

const app = express()
app.use(cors())

var suser = ""
var spass = ""

var array = [{ name: "Rohith", pass: "123" }, { name: "Krishna", pass: "567" }]

app.get("/signup", function (req, res) {
    suser = req.query.suser
    spass = req.query.spass
    array.push({ name: suser, pass: spass })
    res.send(true)
})

app.get("/login", function (req, res) {
    var user = req.query.user
    var pass = req.query.pass

    var result = array.some(function (item) {
        return item.name == user && item.pass == pass
    })

    res.send(result)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Server Started...")
})