// server.js
const express = require('express')
const server = express()

// display hello world
server.get('/hello', (req, res) => {
  res.send('Hello World')
})

var connection = require('./src/config/db-mysql')

connection.init(conn => {
  server.listen('8081', () => {
    console.log('Listening to post 8081')
  })
})
