const db = require("../models");
const Reservation = db.reservations;
const User =db.users;
const Op = db.Sequelize.Op;
const  storeImage = require("./Firebase");

exports.create = async (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  
  
  const reservation = {
    name: req.body.name,
    bookid:req.body.bookid
    };


  Reservation.create()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating reseravtion."
      });
    });
};

exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}}%` } } : null;
  

  Reservation.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving reservation."
      });
    });
};

exports.findOne = (req, res) => {

try{
  const id = req.params.id;
  Reservation.findByPk(id)
    .then(data => {
      if(!data){
        res.status(404).send({
          message: "Not found reservation with id " + id
        });
      }else{
        res.send(data);
      }
      
    })}catch(err){
      res.status(500).send({
        message: "Error retrieving reservation with id=" + id
      });
    }
}

