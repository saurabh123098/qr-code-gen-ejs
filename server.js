const express = require('express')
const QRCode = require('qrcode')
const path = require('path')


const app = express()


app.get('/',(request,response)=>{
    response.send('<h1>Hello Saurabh</h1>')
})


// Homework 
// Write 2 - 3 Get eg. /home , /about , /contact



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
