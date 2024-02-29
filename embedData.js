const mongoose = require('mongoose'); 
const {Pet,Owner} = require('./embedDB')
const newOwner = new Owner({
  name: 'Bob',
  email: 'bob@email.com',
})
newOwner.pets.push({
  name: 'Leo',
  species: 'dog',
})
console.log(newOwner)
const savedOwner =  newOwner.save();
console.log(savedOwner)
