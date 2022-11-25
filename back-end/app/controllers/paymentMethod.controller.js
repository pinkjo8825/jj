const PaymentMethod = require("../model/paymentMethod.model");

function create(req,res){
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty.",
    });
  }
  const paymentObj = new PaymentMethod({
    paymentType :  req.body.paymentType
  });
  PaymentMethod.create(paymentObj, (err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while creating.",
      });
    } else res.send(data);
  });
}

function read(req, res){
  PaymentMethod.read((err, data) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occured while retriveing data.",
      });
    } else res.send(data);
  });
}

function update(req, res){
  if(!req.body){
    res.status(400).send({ message: "Content can not be empty."});
  }
  const data = {
    paymentType :  req.body.paymentType
  };
  PaymentMethod.update(req.params.id, data, (err, result)=>{
    if(err){
      if(err.kind == "not_found"){
        res.status(401).send({
          message: "Not found id: " + req.params.id
        });
      } else{
        res.status(500).send({
          message: "Error update user id: " + req.params.id
        });
      }
    } else res.send(result);
  });
}

function del(req, res){
  PaymentMethod.del(req.params.id, (err, result)=>{
    if(err){
      if(err.kind == "not_found"){
        res.status(401).send({
          message: "Not found id: " + req.params.id
        });
      }else{
        res.status(500).send({
          message: "Error delete user id: " + req.params.id
        });
      }
    }
    else res.send(result);
  });
}

module.exports = {
  create,
  read,
  update,
  del
  };