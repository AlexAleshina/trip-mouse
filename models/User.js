var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        phone: { type: String, required: true },
        email: { type: String, required: true },
        passwordHash: { type: String, required: true },
        trips: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Trips'
        }]
    },
    {
        timestamps: true
    }
);

const User = mongoose.model("Users", userSchema);


module.exports = User;