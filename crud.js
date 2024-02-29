const mongoose = require('mongoose'); 
const con = require('./conn');
// const schema = require('./schema')
const Owner = require('./schema');
const express = require('express');
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
const cors = require('cors')

app.use(cors())
// const http = require('http');
// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html')
//   res.end('<h1>Hello, World!</h1>')
// });
const PORT = process.env.PORT || 3002;
// const app = route();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});



// module.exports = function(app) {
//   app.use(
//     '/',
//     createProxyMiddleware({
//       target: 'http://localhost:3002',
//       changeOrigin: true,
//     })
//   );
// };


// const newOwner =  Owner.create({
//   name: 'codi',
//   email: 'codi@email.com',
// })
// console.log(newOwner)

// const newOwner =  schema.create({
//   name: 'codi',
//   email: 'codi@email.com',
// })									//Works
// console.log(newOwner)

// const newOwner =  Owner.create({
//   name: 'sodi',
//   email: 'sodi@email.com',
// })
// console.log(newOwner)

// const newOwner = Owner.create({
//   name: 'sody',
//   email: 'sody@email.com',
// })
// console.log(newOwner)

app.post('/', async (req, res) => {
  // const newOwner = await Owner.create({
  //   name: req.body.name,
  //   email: req.body.email,
  // })
  // console.log(newOwner)
  
  const newOwner = new Owner({
    name: req.body.name,
    email: req.body.email,
  })                   //doesn't work
  console.log(newOwner)

  newOwner.save()
     .then(doc => {
       console.log(doc)
     })
     .catch(err => {
       console.error(err)
     })
res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  return res.status(200).json({
    status: 'Success',
    message: 'Data Inserted Successfully!',
    data: newOwner
  })
})




// const newOwner = new schema({
//   name: 'sody',
//   email: 'sody@email.com',
// })										//doesn't work
// console.log(newOwner)

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
