var mongoose = require('mongoose')

var Schema = mongoose.Schema

var userSchema = Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
})

var User = mongoose.model('user', userSchema)

module.exports = User