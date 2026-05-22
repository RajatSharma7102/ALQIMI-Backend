const mongoose = require('mongoose')

//Schema in which data save in db 
const UserSchema = new mongoose.Schema(
    {
        email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        },

        firstName: {
        type: String,
        required: true,
        trim: true,
        },

        lastName: {
        type: String,
        required: true,
        trim: true,
        },

        password: {
        type: String,
        required: true,
        },

        organization: {
        type: String,
        required: true,
        trim: true,
        },

        phone: {
        type: String,
        required: true,
        trim: true,
        },

        position: {
        type: String,
        trim: true,
        default: "",
        },
    },
  { timestamps: true }
);

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;