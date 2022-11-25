const sql = require("./db");

  
const AdditionService = function (request) {
    this.service = request.service;
    this.price = request.price
  };

  AdditionService.create = (newRequest, result) => {
      sql.query("INSERT INTO addition_services SET ?", newRequest, (err, res) => {
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

AdditionService.read = (result) => {
    sql.query("SELECT * FROM addition_services", (err, res) => {
        if (err) {
          console.log("Query error: " + err);
          result(err, null);
          return;
        }
        result(null, res);
      });
}

AdditionService.update = (id, data, result) => {
    

    sql.query(
      "UPDATE addition_services SET service=?, price=? WHERE id=?",
      [data.service, data.price,  parseInt(id)],
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


AdditionService.del = (id, result) => {
    
    sql.query("DELETE FROM addition_services WHERE id = ?", id, (err, res)=>{
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

  module.exports = AdditionService;