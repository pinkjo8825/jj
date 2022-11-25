const authJWT = require("../middleware/auth.jwt")
module.exports = (app) => {
    const request_controller = require("../controllers/request.controller")
    var router = require("express").Router();
    router.post("/new",authJWT, request_controller.create);  
    router.get("/",authJWT, request_controller.read);       
    router.put("/:id",authJWT, request_controller.update); 
    router.delete("/:id",authJWT, request_controller.del);
    app.use("/api/request", router);
};