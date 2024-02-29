const mongoose = require('mongoose'); 
const con = require('./conn');
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
});
const Pet = mongoose.model('Pet', petSchema);
const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' Well, there is something in the name.'],
  },
  email: {
    type: String,
    required: [true, 'This is the way of communication.'],
    unique: [true, 'Who else is using this email'],
  },
  pets: [petSchema] // refer to the introduction of this section
});
const Owner = mongoose.model('Owner', ownerSchema);
module.exports = {Pet,Owner}