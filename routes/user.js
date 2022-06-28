var router = require("express").Router();

const userController = require('../controllers/user');

router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
router.get("/registration/:registration", userController.findByRegistration);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.delete);
//router.post("/login", userController.checkLogin);
//router.put("/changePassword/:id", userController.changePassword);

module.exports = router;  