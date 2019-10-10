var mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tripSchema = new Schema(
    {
        origin: { type: String, required: true },
        destination: { type: String, required: true },
        value: { type: String, required: true },
        depart_date: { type: String, required: true },
        return_date: { type: String, required: true },
        gate: { type: String, required: true },
    }
);

const Trip = mongoose.model("Trips", tripSchema);


module.exports = Trip;