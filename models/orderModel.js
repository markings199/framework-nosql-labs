const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId:    { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  product:   { type: String, required: true },
  price:     { type: Number, required: true },
  orderDate: { type: Date, required: true }
});

module.exports = mongoose.model("Order", orderSchema);