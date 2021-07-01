var express = require("express");
var router = express.Router();
var contactController = require("../controllers/contact");

/* GET home page. */
// router.get("/", function (req, res, next) {
// 	res.render("index", { title: "Express" });
// });

router.post("/contact", contactController.createContact);
router.get("/contact", contactController.getContacts);
router.get("/contact/:id", contactController.getContact);
router.put("/contact/:id", contactController.updateContact);
router.delete("/contact/:id", contactController.deleteContact);

module.exports = router;
