const mongoose = require('mongoose')
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const express = require('express')
const app = express()

app.use(express.json())
app.use('/api/genres', genres);
app.use('/api/customers', customers)



mongoose.connect('mongodb://localhost/vidly')
.then(()=> console.log('connected to mongodb...'))
.catch(err=> console.error('could not connect to mongodb', err))



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('server is running on port' , PORT);
    
})