const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.barrows = require("./barrowingModel.js")(sequelize, Sequelize);
db.books = require("./bookModel.js")(sequelize, Sequelize);
db.users = require("./userModel.js")(sequelize, Sequelize);
db.reservations = require("./reservationModel.js")(sequelize, Sequelize);
db.notifications = require("./notificationModel.js")(sequelize, Sequelize);
db.popular = require("./popularBookModel.js")(sequelize, Sequelize);
db.blacklists = require("./blacklistModel.js")(sequelize, Sequelize); 
db.comments = require("./commentModel.js")(sequelize, Sequelize);


const Book  = db.books;
const Reservation  = db.reservations;
const {User} = db.users
const Barrow = db.barrows;
const popular = db.popular;
// Add associations here
Reservation.belongsTo(User, {
  foreignKey: 'name', // Assuming the 'name' field in Reservation links to User's 'name' field
});

Reservation.belongsTo(Book, {
  foreignKey: 'bookid', // Assuming the 'bookid' field in Reservation links to Book's 'bookid' field
  
});

Barrow.belongsTo(Book, {
  foreignKey: 'bookid', 
});

Barrow.belongsTo(User,{
  foreignKey:'name'
})

 
  
User.hasMany(Barrow,{
    foreignKey:'name'
  })


User.hasMany(Reservation, {
  foreignKey: 'name', 
});

Book.hasMany(Reservation, {
  foreignKey: 'bookid', 
});

// Book.belongsTo(
//   popular,
//   { foreignKey: 'ISBN' }
// );


Book.belongsTo(
  Barrow,
  { foreignKey: 'bookid' }
  ) 

module.exports = db;
