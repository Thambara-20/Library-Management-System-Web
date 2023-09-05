const db = require("../models");
const { User, validateUser } = db.users;
const Op = db.Sequelize.Op;
const config = require("config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const _ = require("lodash");

exports.get = async (req, res) => {
  console.log(req.user.name);
  const user = await User.findByPk(req.user.name);
  res.send(user)
};

// Create and Save a new User
exports.signup = async (req, res) => {
  // Validate request
  const { error } = validateUser(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  if (!req.body.name || !req.body.password) {
    return res.status(400).send({
      message: "Username and password are required fields."
    });
  }

  try {
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = _.pick(req.body, ["name", "password", "national_id"]);

    const newUser = await User.create({
    
      name: user.name,
      password: hash,
      national_id: user.national_id,
      isAdmin: user.name === "administrator" ? true : false
    });

    res.send( newUser.generateAuthToken())

  } catch (err) {
    return res.status(500).send({
      message: err.message || "Some error occurred while creating the User."
    });
  }
};


exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const { name, password } = req.body;
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(401).send("Invalid credentials.");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {

      const role = name === "admin" ? "admin" : "user";
      console.log("Login successful for user:", user.name);

      const token = user.generateAuthToken();
      return res.header("x-auth-token", token).status(201).send(token);

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
  const name = req.body.name;
  console.log(name);
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  User.findAll({})
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

exports.deleteUser = async (req, res) => {
  const name = req.body.name;
  console.log(name);

  try {
    // Find the user by name
    const user = await User.findOne({ where: { name } });

    if (!user) {
      // If user doesn't exist, return an error response
      return res.status(404).json({ error: 'User not found' });
    }

    // Delete the user
    await user.destroy();

    // Respond with a success message
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
