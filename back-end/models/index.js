const dbConfig = require("../config/db.config.js");


const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.books = require("./bookModel.js")(sequelize, Sequelize);
db.users = require("./userModel.js")(sequelize, Sequelize);
db.reservations = require("./reservationModel.js")(sequelize, Sequelize);

const Book  = db.books;
const Reservation  = db.reservations;
const {User} = db.users

// Add associations here
Reservation.belongsTo(User, {
  foreignKey: 'name', // Assuming the 'name' field in Reservation links to User's 'name' field
});

Reservation.belongsTo(Book, {
  foreignKey: 'bookid', // Assuming the 'bookid' field in Reservation links to Book's 'bookid' field
  
});

// Optional: If you want to retrieve reservations for a specific user, you can add the following association:
User.hasMany(Reservation, {
  foreignKey: 'name', // Assuming the 'name' field in Reservation links to User's 'name' field
});

// Optional: If you want to retrieve reservations for a specific book, you can add the following association:
Book.hasMany(Reservation, {
  foreignKey: 'bookid', // Assuming the 'bookid' field in Reservation links to Book's 'bookid' field
});

module.exports = db;
