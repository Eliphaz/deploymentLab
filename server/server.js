const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

app.use(express.static(path.join(__dirname, '../public')))
app.use('/static/photos', express.static(path.join(__dirname, '../static/photos')))

const port = process.env.PORT || 5500

app.listen(port, () =>{
    console.log(`docked at port ${port}`)
})