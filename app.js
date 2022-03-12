//Creating a simple server in Node.js

const http = require('http')

const express = require('express')

const app = express()

app.use('/',(req,res,next) =>{
    console.log('all')
    next()
})
app.use('/add',(req, res, next) => {
    console.log('Add`')
    res.send('<h1>Add</h1>')
})

app.use('/',(req, res, next) => {
    console.log('In the other middleware!')
    res.send('<h1>Hello from Express!</h1>')
})

app.listen(3000)