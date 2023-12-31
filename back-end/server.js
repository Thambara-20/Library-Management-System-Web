require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const { checkOverdueItems } = require('./controllers/notificationController');


if (!process.env.JWT_PRIVATE_KEY) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined.");
  process.exit(1);
}


const corsOptions = {
  origin: "*", 
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, 
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });


// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });


require("./routes/barrowingRoutes")(app);
require("./routes/bookRoutes")(app);
require("./routes/userRoutes")(app);
require("./routes/reservationRoutes")(app);
require("./routes/notificationRoutes")(app);
require("./routes/homeRoutes")(app);
require("./routes/blacklistRoutes")(app);
require("./routes/commentRoutes")(app);
require('./routes/registerRoutes')

// Call checkOverdueItems to run it when the server starts

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send(req.body);
// });


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
  setInterval(checkOverdueItems, 1200000);
  
});



