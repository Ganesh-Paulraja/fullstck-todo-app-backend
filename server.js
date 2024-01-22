const express = require('express');
const mongoose = require("mongoose") 
const cors = require('cors')
const app = express()
const routes = require('./routes/toDoRoutes')

require('dotenv').config()
app.use(express.json())
app.use(cors())


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Listioning on: ${PORT}`))
app.use(routes)

mongoose
.connect(process.env.MONGODB_URL)
.then(()=>console.log(`connected DB ..`))
.catch((err) => console.log(`error here ${err}`))
