var mongoose = require("mongoose");

//Schema constructor
var Schema = mongoose.Schema;

//New NoteSchema object
var NoteSchema = new Schema({
    titel: String,
    body: String
});

//Model for NoteSchema
var Note = mongoose.model("Note", NoteSchema);

//Export the Note model

module.exports = Note;