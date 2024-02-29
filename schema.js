const mongoose = require('mongoose'); 
const con = require('./conn');
const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  },
});
const Owner = mongoose.model('Owner', petSchema);


module.exports = Owner

// module.exports = mongoose.model('Owner', petSchema)


// const newOwner =  Owner.create({
//   name: 'sodi',
//   email: 'sodi@email.com',
// })

// const newOwner = new Owner({
//   name: 'sody',
//   email: 'sody@email.com',
// })

// newOwner.save()
//    .then(doc => {
//      console.log(doc)
//    })
//    .catch(err => {
//      console.error(err)
//    })

// const owners =  Owner.find({}).lean();
// const owners =  Owner.find({});
// const owners = new Owner;
// const owners = new Owner();
// const owners = new Owner({});
// console.log(owners)

// const cody =  Owner.find({email: 'cody@email.com' }).exec();
// const cody =  Owner.find({email: 'cody@email.com' });
// const cody = new Owner({email: 'cody@email.com' });
// console.log(cody)

// Owner
//   .find({
//     // email: 'ada.lovelace@gmail.com'   // search query
//     // email: 'cody@email.com'   // search query
//   })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// const updatedCody =  Owner.findOneAndUpdate({email: 'cody@email.com' }, {name: 'Cody Coder'}).exec();
// const updatedCody = new Owner({email: 'sody@email.com' }, {name: 'sody Coder'});
// console.log(updatedCody)

// Owner
//   .findOneAndUpdate(
//     {
//       // email: 'ada.lovelace@gmail.com'  // search query
//       email: 'cody@email.com'  // search query
//     }, 
//     {
//       email: 'theoutlander@live.com'   // field:values to update
//     },
//     {
//       new: true,                       // return updated doc
//       runValidators: true              // validate before update
//     })
//   .then(doc => {
//     console.log(doc)
//   })
//   .catch(err => {
//     console.error(err)
//   })

// const deletedOne =  Owner.findOneAndRemove({email: 'sodi@email.com' }).exec();
// const deletedOne =  Owner.findOneAndDelete({email: 'sody@email.com' }).exec();
// console.log(deletedOne)

// Owner
//   .findOneAndRemove({
//     email: 'theoutlander@live.com'
//   })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.error(err)
//   })
