var mongoose = require("mongoose");

var ContactSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	phone_num: { type: Number, required: true },
});

module.exports = mongoose.model("contact", ContactSchema);
