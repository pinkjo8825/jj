const Category = require("../model/category.model");

function create(req, res) {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty.",
    });
  }
  const categoryObj = new Category({
    carType : req.body.carType,
    priceIn: req.body.priceIn,
    priceInOut: req.body.priceInOut
  });
  Category.create(categoryObj, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while creating.",
      });
    } else res.send(data);
  });
}

function read(req, res) {
  Category.read((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retriveing data.",
      });
    } else res.send(data);
  });
}

function update(req, res) {
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty." });
  }
  const data = {
    carType : req.body.carType,
    priceIn: req.body.priceIn,
    priceInOut: req.body.priceInOut
  };
  Category.update(req.params.id, data, (err, result) => {
    if (err) {
      if (err.kind == "not_found") {
        res.status(401).send({
          message: "Not found id: " + req.params.id,
        });
      } else {
        res.status(500).send({
          message: "Error update user id: " + req.params.id,
        });
      }
    } else res.send(result);
  });
}

function del(req, res) {
  Category.del(req.params.id, (err, result) => {
    if (err) {
      if (err.kind == "not_found") {
        res.status(401).send({
          message: "Not found id: " + req.params.id,
        });
      } else {
        res.status(500).send({
          message: "Error delete user id: " + req.params.id,
        });
      }
    } else res.send(result);
  });
}

module.exports = {
  create,
  read,
  update,
  del,
};
