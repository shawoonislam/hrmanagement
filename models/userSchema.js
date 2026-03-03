const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    lowerCase: true,
    unique: true,
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email address",
    ],
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    min: [5, "Too Low"],
    max: [8, "Too High"],
    // match: [
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    //   "Please enter a valid password",
    // ],
  },

  photo: {
    type: String,
  },

  nid: {
    type: Number,
    min: [10, "Too Low"],
    max: [17, "Too High"],
  },

  address: {
    type: String,
  },
});

// userSchema.pre("save",function(data,next){
//     console.log("data",data)
// })

module.exports = mongoose.model("User", userSchema);