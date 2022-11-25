const sql = require("./db");

  
const Request = function (request) {
    this.userId = request.userId;
    this.licensePlate = request.licensePlate;
    this.carType = request.carType;
    this.cleaningOption = request.cleaningOption;
    this.category = request.category;
    this.paymentMethod = request.paymentMethod;
    this.status = request.status;
    this.visible = request.visible
  };

Request.create = (newRequest, result) => {
      sql.query("INSERT INTO requests SET ?", newRequest, (err, res) => {
    if (err) {
      console.log("Query error: " + err);
      result(err, null);
      return;
    }
    console.log("Created user: ", {
      id: res.insertId,
      ...newRequest,
    });
    result(null, {
      id: res.insertId,
      ...newRequest,
    });
  });
}

Request.read = (result) => {
    sql.query("SELECT * FROM requests", (err, res) => {
        if (err) {
          console.log("Query error: " + err);
          result(err, null);
          return;
        }
        result(null, res);
      });
}

Request.update = (id, data, result) => {

    sql.query(
      "UPDATE requests SET userId=?, licensePlate=?, carType=?, cleaningOption=?, category=?, paymentMethod=?, status=?, visible=? WHERE id=?",
      [data.userId, data.licensePlate, data.carType, data.cleaningOption, data.category, data.paymentMethod, data.status, data.visible, parseInt(id)],
      (err, res) => {
        if (err) {
          console.log("Query error: " + err);
          result(err, null);
          return;
        }
        if (res.affectedRows == 0) {
          //this user id not found
          result({ kind: "not_found" }, null);
          //Mistake return so sent more than one response
          return;
        }
        console.log("Updated request: ", { id: id, ...data });
        result(null, { id: id, ...data });
      }
    );
}


Request.del = (id, result) => {
    
    sql.query("DELETE FROM requests WHERE id = ?", id, (err, res)=>{
      if(err){
        console.log("Query error: " + err)
        result(err, null)
        return;
      }
      if(res.affectedRows == 0){
        result({kind: "not_found"}, null)
        return;
      }
      console.log("Deleted id: ", id)
      result(null, {id: id})
    });
}

  module.exports = Request;