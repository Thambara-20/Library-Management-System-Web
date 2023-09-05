const express = require("express");
const cors = require("cors");
const config = require("config");
const app = express();


if (!config.jwtPrivateKey) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}

// var corsOptions = {
//   origin: "http://localhost:8080"
// };
const corsOptions = {
  origin: "http://localhost:3000", // Replace with your frontend's URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


require("./routes/bookRoutes")(app);
require("./routes/userRoutes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});



