var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
//
// const mongoose = require('mongoose');
//
// const userSchema = mongoose.Schema({
//    Name: {
//      type: String,
//        required: true
//    },
//    DOB: Date
// });
//
// const user = {
//   Name: 'Feroz',
//     DOB: Date.now()
// };
//
// const Model = mongoose.Model('user', userSchema);
//
//
// const UserModel = new Model(user);
// UserModel.save().then(
//   function (response) {
//
//   } ,
//     function (error) {
//
//     }
// );
//
// //promise for synchronizatin
//
// Model.find({
//     DOB: Date.now()
// }).then(
//     function () {
//
//     },
//     function () {
//
//     }
// )
//
