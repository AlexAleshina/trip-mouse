var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
        origin: { type: String },
        destination: { type: String },
        value: { type: String },
        depart_date: { type: String },
        return_date: { type: String },
        number_of_changes: { type: String },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        }
    }
);

const Trip = mongoose.model("Trips", tripSchema);


module.exports = Trip;