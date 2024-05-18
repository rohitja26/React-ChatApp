const {
  addMessage,
  getAllMessage,
} = require("../controllers/messageComponent");

const router = require("express").Router();

router.post("/addmsg", addMessage);
router.post("/getallmsg", getAllMessage);

module.exports = router;
