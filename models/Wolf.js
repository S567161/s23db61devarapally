const mongoose = require("mongoose");

const WolfSchema = mongoose.Schema({
  Wolf_color: {type : String,require: true},
  Wolf_breed: {type : String,require: true},
  Wolf_price: {
    type: Number,
    min: [500, "The wolf price has to be between 500 and 50000"],
    max: [50000, "The wolf price has to be between 500 and 50000"],
  },
});

module.exports = mongoose.model("Wolf", WolfSchema);
