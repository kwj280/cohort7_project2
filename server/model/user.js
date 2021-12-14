const userModel = mongoose.model('User', userSchema)
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)


//create new user
const addUser = async(userInfo) => {
  let user = new userModel(userInfo)
  try {
    await user.save()
    return true
  } catch (error) {
    console.error(error)
    return false
  }
}

//sign user in with email and password
const signIn = async(userInfo) =>{
  console.log(userInfo)
  let user = await userModel.find({
    email: userInfo.email,
    password: userInfo.password
  })
  return user
}



module.exports = {userModel, addUser, signIn}
