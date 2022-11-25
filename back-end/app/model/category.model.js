const sql = require("./db");

  
const Category = function (category) {
    this.carType = category.carType,
    this.priceIn =  category.priceIn,
    this.priceInOut = category.priceInOut
  };

  Category.create = (newCategory, result) => {
      sql.query("INSERT INTO categories SET ?", newCategory, (err, res) => {
    if (err) {
      console.log("Query error: " + err);
      result(err, null);
      return;
    }
    console.log("Created user: ", {
      id: res.insertId,
      ...newCategory,
    });
    result(null, {
      id: res.insertId,
      ...newCategory,
    });
  });
}

Category.read = (result) => {
    sql.query("SELECT * FROM categories", (err, res) => {
        if (err) {
          console.log("Query error: " + err);
          result(err, null);
          return;
        }
        result(null, res);
      });
}

Category.update = (id, data, result) => {
    

    sql.query(
      "UPDATE categories SET carType=?, priceIn=?, priceInOut=? WHERE id=?",
      [data.carType, data.priceIn, data.priceInOut, parseInt(id)],
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


Category.del = (id, result) => {
    
    sql.query("DELETE FROM categories WHERE id = ?", id, (err, res)=>{
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

  module.exports = Category;