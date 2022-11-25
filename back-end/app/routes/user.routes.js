const authJWT = require("../middleware/auth.jwt")
module.exports = (app) => {
    const user_controller = require("../controllers/user.controller")
    var router = require("express").Router();
    router.post("/signup", user_controller.creatNewUser);
    router.get("/:us", user_controller.validUsername);
    router.post("/login", user_controller.login);
    router.get("/",authJWT, user_controller.getAllUsers);
    router.put("/:id", authJWT, user_controller.updateUser);
    router.delete("/:id", authJWT, user_controller.deleteUser);
    app.use("/api/auth", router);
};