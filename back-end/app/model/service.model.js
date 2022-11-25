const sql = require("./db");

  
const Service = function (service) {

    this.requestId = service.requestId;
    this.additionServiceId = service.additionServiceId;
  };

  Service.create = (newService, result) => {
      sql.query("INSERT INTO services SET ?", newService, (err, res) => {
    if (err) {
      console.log("Query error: " + err);
      result(err, null);
      return;
    }
    console.log("Created user: ", {
      id: res.insertId,
      ...newService,
    });
    result(null, {
      id: res.insertId,
      ...newService,
    });
  });
}

Service.read = (result) => {
    sql.query("SELECT * FROM services", (err, res) => {
        if (err) {
          console.log("Query error: " + err);
          result(err, null);
          return;
        }
        result(null, res);
      });
}

Service.update = (id, data, result) => {
    

    sql.query(
      "UPDATE services SET requestId=?, additionServiceId=? WHERE id=?",
      [data.requestId, data.additionServiceId, parseInt(id)],
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


Service.del = (id, result) => {
    
    sql.query("DELETE FROM services WHERE id = ?", id, (err, res)=>{
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

  module.exports = Service;