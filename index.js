const config = require("config")
const mongoose = require('mongoose')
const genres = require('./routes/genres')
const customers = require('./routes/customers')
const movies = require('./routes/movies');
const rentals = require('./routes/rentals');
const users = require('./routes/users');
const auth = require('./routes/auth');
const express = require('express')
const app = express()

if (!config.get('jwtPrivateKey')){
    console.error('FATAL ERROR: jwtPrivateKey is not defined')
    process.exit(0)
}

app.use(express.json())
app.use('/api/genres', genres);
app.use('/api/customers', customers)
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);
app.use('/api/auth', auth);



mongoose.connect('mongodb://localhost/vidly')
.then(()=> console.log('connected to mongodb...'))
.catch(err=> console.error('could not connect to mongodb', err))



const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log('server is running on port' , PORT);
    
})