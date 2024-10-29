import mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!*?&]{8,}$/.test(
          value
        );
      },
    },
    massage: "Password must contain atleast one lowercase, one uppercase, a number and one special charactor",
  },
  

});

userSchema.methods.matchpasswords = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password)
}

export default mongoose.model("User", userSchema)