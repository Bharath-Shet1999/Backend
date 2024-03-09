const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('bharathdotcom')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login at website</h1>')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})