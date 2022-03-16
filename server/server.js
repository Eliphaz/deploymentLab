const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT || 5500

app.listen(port, () =>{
    console.log(`docked at port ${port}`)
})