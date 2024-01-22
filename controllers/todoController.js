const toDoModel = require('../models/toDoModel')
module.exports.getToDo = async (req, res) => {
    const toDo = await toDoModel.find();
    res.send(toDo)
}

module.exports.saveToDo = async (req, res) => {
    const {text} = req.body
    toDoModel.create({text})
    .then((data) => {
        console.log("Added Successfully...")
        console.log(data)
        res.send(data)
    })
}

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body
    toDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updted Successfully")) 
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body
    toDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully")) 
    .catch((err) => console.log(err))
}