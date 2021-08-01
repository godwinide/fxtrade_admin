const {model, Schema} = require("mongoose");

const UserSchema = new Schema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    fullname:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    balance:{
        type: Number,
        required: false,
        default: 0
    },
    deposit:{
        type: Number,
        required: false,
        default: 0
    },
    last_balance:{
        type: Number,
        required: false,
        default: 0
    },
    withdrawer:{
        type: Number,
        required: false,
        default: 0
    },
    createdAt:{
        type: Date,
        required: false,
        default: Date.now
    }
});

module.exports = User = model("User", UserSchema);