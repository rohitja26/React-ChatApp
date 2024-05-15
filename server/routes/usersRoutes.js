const {
  register,
  login,
  setavatar,
  getAllUsers,
} = require("../controllers/usersControllers");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setavatar/:id", setavatar);
router.get("/alluser/:id", getAllUsers);

module.exports = router;
