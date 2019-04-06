var mongoose= require ('mongoose')
// schema
var Schema= mongoose.Schema
// model
var voteSchema = Schema({
    voteType: {
      // true means upvote and false means downvote
        type: Boolean,
        required: true,
    },
    idea: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'idea',
    },
    voter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
})

var Vote = mongoose.model('vote', voteSchema)
module.exports = Vote
//Type (upvote, downvote), idea_id, user_id
