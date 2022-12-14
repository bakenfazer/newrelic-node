require("dotenv").config();
const express = require('express')
const app = express()
const port = process.env.PORT
const host = process.env.HOST

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/error', (req, res) => {
    throw new Error('This is an error!')
  })

  app.get('/oh-no', (req, res) => {
    res.status(400);
    res.send('oh no!');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${host}:${port}`)
})