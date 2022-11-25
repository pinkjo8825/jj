const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
/*
file 
Error: Error: EPERM: operation not permitted, unlink '/Users/net/Downloads/back-end/assets/uploads/'
Query error: Error: read ECONNRESET
*/
global.__basedir = __dirname;
var corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my REST API. 6430613036" });
});
//missing app
require("./app/routes/file.routes")(app);
require("./app/routes/user.routes")(app); //
require("./app/routes/request.routes")(app); //
require("./app/routes/paymentMethod.routes")(app); //
require("./app/routes/category.routes")(app);  //
require("./app/routes/service.routes")(app); //
require("./app/routes/additionService.routes")(app); //

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
