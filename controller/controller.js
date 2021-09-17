const db = require('../config/dbConfig');
const Notes = require('../models/Notes');

let note = {}

note.show = (req,res) =>{
    Notes.findAll()
    .then(notes => res.send(notes))
    .catch(err => console.log(err))
}

note.delete = function (req,res) { 
    Notes.destroy(
    {
        where: 
        {
            title: req.body.title
        }
    })
    .then(function (deletedRecord) {
        if(deletedRecord === 1){
            res.status(200).json({message:"Deleted successfully"});          
        }
        else
        {
            res.status(404).json({message:"record not found"})
        }
    })
    .catch(function (error){
        res.status(500).json(error);
    });
}


note.create = (req,res) => {
    let {title, description} = req.body;
    let errors = [];

    if(!title)
    {
        errors.push({text : "please add a title"});
        
    }
    if(errors.length >  0)
    {
        console.log(errors[0].text);
        res.send("PLEASE add a title!");
    }
    else{
        Notes.create({
            title, description
        })
        .then(() => console.log('Data Saved!'))
        .catch((err) => console.log(err));
    }


}

note.update = (req,res) => 
{
    Notes.findOne({where : {title : res.body.title}})
        .then((noteFound) => {
            noteFound = res.body
            noteFound.save()
        })
        .catch(() => console.log('No such note found in database'))

}

module.exports = note