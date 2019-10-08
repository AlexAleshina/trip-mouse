var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        passwordHash: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("Users", userSchema);


module.exports = User;