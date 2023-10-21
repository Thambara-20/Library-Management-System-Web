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

exports.signup = async (req, res) => {
  try{
  const { error } = validateUser(req.body);}
  catch(error){
    return res.status(400).send(error);
  }

  try {
    if (!req.body.name || !req.body.password || !req.body.email) {
      return res.status(400).send({
        message: "Missing required fields."
      });
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    const user = _.pick(req.body, ["name", "national_id", "email", "address"]);

    const newUser = await User.create({
    
      name: user.name,
      password: hash,
      email: user.email,
      address: user.address,
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
      return res.header("x-auth-token", token).status(200).send(token);

    } else {
      console.log("Invalid credentials.", user.name);
      return res.status(401).send("Invalid credentials.");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("An error occurred during login.");
  }
};

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
    const user = await User.findOne({ where: { name } });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const name = req.user.name; // Assuming you have user information in the request object
    const updates = req.body;
    console.log(updates);

    if (!name) {
      return res.status(401).send("Unauthorized");
    }

    const user = await User.findOne({ where: { name: name } });
    console.log(user);

    if (!user) {
      return res.status(404).send("User not found");
    }

    // Ensure the user can only update their own information
    if (name !== user.name) {
      return res.status(403).send("Permission denied");
    }

    // Check if the previous password matches
    if (updates.currentPassword) {
     
      const passwordMatch = await bcrypt.compare(updates.currentPassword, user.password);
      console.log(updates.currentPassword);
      if (!passwordMatch) {
        return res.status(401).send("Previous password does not match.");
      }
    }

    // Perform the updates on allowed fields
    if (updates.name) {
      user.name = updates.name;
    }
    if (updates.newPassword) {
      const hash = await bcrypt.hash(updates.newPassword, 10);
      user.password = hash;
    }
    if (updates.email) {
      user.email = updates.email;
    }
    if (updates.national_id) {
      user.national_id = updates.national_id;
    }
    if (updates.phone) {
      user.phone_number = updates.phone;
    }
    if (updates.address) {
      user.address = updates.address;
    }


    // Save the updated user
    await user.save();

    res.status(200).send("User updated successfully");

  } catch (error) {
    console.error("Error during user update:", error);
    res.status(500).send("An error occurred during user update");
  }
};


exports.usersCount= async (req, res) => {
  try {
    const count = await User.count();
    res.status(200).send({ count });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while counting users");
  }
}

