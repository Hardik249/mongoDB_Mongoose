const mongoose = require('mongoose'); 
const con = require('./conn');
const ownerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, ' Well, there is something in the name.'],
  },
  email: {
    type: String,
    required: [true, 'This is the way of communication.', ],
    unique: [true, 'Who else is using this email'],
  },
  // pets: [{
  //   // type: mongoose.Types.ObjectId,
  //   // ref: 'Pet'
  //   // ref: petSchema // refer to the introduction of this section
  //   ref: [petSchema] // refer to the introduction of this section
  // }]
});
const Owner = mongoose.model('Owner', ownerSchema);
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  owners_id: [{ 
    type: mongoose.Schema.Types.ObjectId, 
    // ref: 'Owner' 
    // ref: ownerSchema 
  }]
});
const Pet = mongoose.model('Pet', petSchema);

module.exports = {Owner,Pet};