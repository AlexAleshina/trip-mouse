var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
        budget: { type: String, required: true },
        fromDate: { type: String, required: true },
        toDate: { type: String, required: true },
        fromPlace: { type: String, required: true },
        where: { type: String, required: true }
    },
    {
        timestamps: true
    }
);

const Trip = mongoose.model("Trips", tripSchema);


module.exports = Trip;