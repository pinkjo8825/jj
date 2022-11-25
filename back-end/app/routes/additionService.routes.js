const authJWT = require("../middleware/auth.jwt")
module.exports = (app) => {
    const additionService_controller = require("../controllers/addditionService.controller")
    var router = require("express").Router();
    router.post("/new",authJWT, additionService_controller.create);  
    router.get("/",authJWT, additionService_controller.read);       
    router.put("/:id",authJWT, additionService_controller.update); 
    router.delete("/:id",authJWT, additionService_controller.del);
    app.use("/api/additionservice", router);
};