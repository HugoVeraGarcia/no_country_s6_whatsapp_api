const expres = require("express");

const router = expres.Router();
const whatsAppController = require("../controllers/whatsappControllers");

router
.get("/send", whatsAppController.SendMessage)
.get("/firstSend", whatsAppController.firstSendMessage)

module.exports = { whatsappRouter: router };
