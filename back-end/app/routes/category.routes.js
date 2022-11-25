const authJWT = require("../middleware/auth.jwt")
module.exports = (app) => {
    const category_controller = require("../controllers/category.controller")
    var router = require("express").Router();
    router.post("/new",authJWT, category_controller.create);  
    router.get("/",authJWT, category_controller.read);       
    router.put("/:id",authJWT, category_controller.update); 
    router.delete("/:id",authJWT, category_controller.del);
    app.use("/api/category", router);
};