var express = require("express")
var cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())

var suser = ""
var spass = ""

var array = [{ name: "Rohith", pass: "123" }, { name: "Krishna", pass: "567" }]

app.post("/signup", function (req, res) {
    suser = req.body.suser
    spass = req.body.spass
    array.push({ name: suser, pass: spass })
    res.send(true)
})

app.post("/login", function (req, res) {
    var user = req.body.user
    var pass = req.body.pass

    var result = array.some(function (item) {
        return item.name == user && item.pass == pass
    })

    res.send(result)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log("Server Started...")
})