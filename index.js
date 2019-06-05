var bodyParser = require('body-parser')
var express = require('express')
var app = express()
var port = process.env.PORT || 8080


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

users = []

app.get('/', (req, res) => {
    res.send(users)
})

app.post('/register', (req, res) => {
    var name = req.body.name
    var condition = req.body.condition
    var bluetooth_address = req.body.bluetooth_address
	
	users.push([name, condition, bluetooth_address])
    res.send("Registered Successfully")
})


// start the server
app.listen(port)
console.log('Server started! At http://localhost:' + port)
