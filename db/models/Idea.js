var mongoose= require ('mongoose')
// schema
var Schema= mongoose.Schema
// model
var ideaSchema = Schema({
    title:{
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    issueaddressed: {
      type: String,
      required: true
    },
    datetime: {
      type: Date,
      required: true
    },
    location:{
        type: String,
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user'
    },
})

var Idea = mongoose.model('idea',ideaSchema )
module.exports = Idea
