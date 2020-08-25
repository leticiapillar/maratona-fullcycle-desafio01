const express = require('express')
const app = express()

app.use(express.static("."));

app.get('/', (req, res) => {
    res.send('Eu sou Full Cycle.')
})

app.listen("8080", () => {
    console.log("Server is listening on port 8080")
})