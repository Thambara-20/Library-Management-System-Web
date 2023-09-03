const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");


// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name || !req.body.password) {
    res.status(400).send({
      message: "Username and password are required fields."
    });
    return;
  }

  const hash = bcrypt.hashSync(req.body.password, 10);

  // Create a new User
  const user = {
    name: req.body.name,
    password: hash,
    national_id: req.body.national_id
  };

  // Save the User in the database
  User.create(user)
    .then(data => {
      res.status(201).send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the User."
      });
    });
};

// Handle user login
exports.login = async (req, res) => {
    try {
      const { name, password } = req.body;
  
      const user = await User.findOne({ where: { name } });
  
      if (!user) {
        return res.status(401).send("Invalid credentials.");
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (passwordMatch) {
    
        console.log("Login successful for user:", user.name);
        return res.status(200).send("Login successful.");
      } else {
        console.log("Invalid credentials.", user.name);
        return res.status(401).send("Invalid credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("An error occurred during login.");
    }
  };

// Retrieve all books from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Book.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving books."
      });
    });
};
