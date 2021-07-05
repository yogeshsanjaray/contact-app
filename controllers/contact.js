var Contact = require("../models/contact");

exports.createContact = async function (req, res) {
	var contactOb = new Contact({
		name: req.body.name,
		email: req.body.email,
		phone_num: req.body.phone_num,
	});

	try {
		var contact = await contactOb.save();
		res.json(contact);
	} catch (err) {
		console.log(err);
		res.status(500).send({ error: "Cant save!!" });
	}
};

exports.getContacts = async function (req, res) {
	try {
		const contact = await Contact.find();
		res.json(contact);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.getContact = async function (req, res) {
	try {
		const contact = await Contact.findById(req.params.id);
		res.json(contact);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.updateContact = async function (req, res) {
	try {
		const contact = await Contact.findByIdAndUpdate(
			req.params.id,
			req.body
		);
		res.json({
			status: 1,
			msg: req.params.id + " successfully update",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

exports.deleteContact = async function (req, res) {
	try {
		const contact = await Contact.findByIdAndDelete(req.params.id);
		res.json({
			status: 1,
			msg: req.params.id + " successfully deleted",
		});
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
