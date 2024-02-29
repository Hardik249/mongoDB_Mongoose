const mongoose = require('mongoose'); 
const con = require('./conn');
const {Pet,Owner} = require('./referencesDB')

const newOwner = new Owner({
  name: 'Geo',
  email: 'geo@email.com'
})
newOwner.save((error,data)=>{
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})


const newPet =  Pet.create({
  name: 'Veenuss',
  species: 'goat',
  owners_id: Owner
  // owners_id: newOwner
  // owners_id: [newOwner]
})


// const newPet =  Pet.create({
//   name: 'Venuss',
//   species: 'cow',
//   owners_id,
//   {
//     $push: {
//       owners: {
//         name: newOwner.name,
//         email: newOwner.email
//       }
//     }
//   },
//   {new: true, useFindAndModify: false}
//   // owners_id: newOwner
//   // owners_id: [newOwner]
// })



// const savedPet = new Pet({
//   name: 'jane doe',
//   email: 'jane@email.com',
//   pets:newPet
// })
// savedPet.save()
// console.log(savedPet)

// const newOwner =  Owner.create({
//   name: 'Gorge',
//   email: 'gorge@email.com',
//   owners: newPet
// })


// console.log(newOwner)
// console.log(newPet)

// const newPet =  Owner.pets.create({
//   name: 'Venus',
//   species: 'cat',
// })


// const petId = Owner.pets(_id)
// console.log(petId)

// newOwner.pets.push(newPet);

// Owner.pets.push(newPet);

// Owner.pets.push({
//   name: 'Venus',
//   species: 'cat',
// });

// const savedPet = new Owner({
//   name: 'jane doe',
//   email: 'jane@email.com',
//   pets:newPet
// })
// savedPet.save()
// console.log(savedPet)

// const savedPet = newOwner.pets.push(newPet);
// savedPet.isNew

// const savedOwner =  newOwner.save();
// const savedOwner =  newOwner.save();
// console.log(savedOwner)


// const owners = new Owner({
//   _id: new mongoose.Types.ObjectId(),
//   name: 'George',
//   email: 'george@email.com',
//   // pets: Pet._id,
//   pets: newPet,
// })
// owners.save((error,data)=>{
//   if (error) {
//     console.error(error)
//   } else {
//     console.log(data)
//   }
// })

// let savedOwner;
// for(i=0;i<=newPet;i++){
//   newOwner.pets.push(newPet);
//   savedOwner =  newOwner.save();
// }
// console.log(savedOwner)


// newOwner.pets.push({
//   name: 'Venus',
//   species: 'cat',
// });

const ownerAndPets =  Owner.findOne({email: 'george@email.com'}).populate('pets').exec();
console.log(ownerAndPets)