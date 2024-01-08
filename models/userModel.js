const mongoose =require('mongoose');
// const userSchema = new mongoose.Schema({
//     // name :String,
//     // age :Number,
//     // city :String,
    
// })
const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    city: {
        type: String,
        required: true
      },
  },{ timestamps: true });

const User = mongoose.model('user',userSchema);
module.exports = User;

