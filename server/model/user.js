const mongoose = require("mongoose");
const { createProfile } = require("./profile");

const userSchema = new mongoose.Schema(
  {
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
  }
);

const userModel = mongoose.model("User", userSchema);

const hashPassword = (password) => {
  return password;
};

//create new user
const addUser = async (userInfo) => {
  let hashedPassword = hashPassword(userInfo.password);

  let user = new userModel(userInfo);
  try {
    await user.save();
    let emptyProfile = {
      userId: user._id,
    };
    await createProfile(emptyProfile);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

//sign user in with email and password
const signIn = async (userInfo) => {
  let user = await userModel.find({
    email: userInfo.email,
    password: userInfo.password,
  });
  return user;
};

const findByUserEmail = async (email) => {
  let user = await userModel.findOne({ email });
  return user;
};

const findById = async (id) => {
  let user = await userModel.findById(id);
  return user;
};

const updateUser = async (id, newUser) => {
  let user = await userModel.findByIdAndUpdate(id, newUser);
  return user;
};

module.exports = { updateUser, userModel, addUser, signIn, findByUserEmail, findById };
