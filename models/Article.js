var mongoose = require("mongoose");

//Reference to Schema constructor
var Schema = mongoose.Schema;

//New ArticleSchema object
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    }, 
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

//Model for ArticleSchema
var Article = mongoose.model("Article", ArticleSchema);

//Export Article model
module.exports = Article;