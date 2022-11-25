const authJWT = require("../middleware/auth.jwt")
module.exports = (app) => {
    const service_controller = require("../controllers/service.controller")
    var router = require("express").Router();
    router.post("/new",authJWT, service_controller.create);  
    router.get("/",authJWT, service_controller.read);       
    router.put("/:id",authJWT, service_controller.update); 
    router.delete("/:id",authJWT, service_controller.del);
    app.use("/api/service", router);
};