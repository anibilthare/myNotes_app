// first letter of models file is uppercase according to  industry conventions.
const Sequelize = require('sequelize');

const db = require('../config/dbConfig');

const mynotes = db.define('notes', {
    title : {
    type: Sequelize.STRING,
    allowNull : false,
    max: 250,
    id: false,
    unique: true,
    primaryKey : true

},
    description : {
    id: false,
    type : Sequelize.STRING,
    max : 1000
}
}, {
    tableName: 'notes',
    timestamps : false
})


module.exports = mynotes;