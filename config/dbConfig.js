const {Sequelize} = require('sequelize');

const dbURL = 'postgres://postgres:donteverchange@localhost:5432/mynotes';
const db = new Sequelize(dbURL); 


module.exports = db;