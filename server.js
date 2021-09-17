const express = require('express');
const {Sequelize} = require('sequelize');
const notes =  require('./controller/controller');
// connecting to database
const db = require('./config/dbConfig');
// Testing the connnection
db.authenticate() 
    .then(() => {
        console.log('Connection has been established successfully.')
    })
    .catch (error => console.log('There was some issue connecting to database: ' +error))


const app = express();
const port = process.env.PORT ||  3000;

// Parses the JSON to a JS object... Based on body-parser
app.use(express.json()); 

// Retrives all the notes from the database
app.get('/show',notes.show);

// Adds a note to the database
app.post('/add',(req,res,next) => {
    console.log(req.body)
    next()
},  notes.create);

// Deletes a note from the database
app.delete('/delete', notes.delete);

// Updates a note already present in database
app.put('/update', notes.update);




app.listen(3000,() => console.log(`Server started on port ${port}`));