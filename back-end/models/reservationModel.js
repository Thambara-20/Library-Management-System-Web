module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define("reservation", {
    user_name: {
      type: Sequelize.STRING
    },
    bookid: {
      type: Sequelize.STRING
    }
  });

  Reservation.associate = (models) => {
    Reservation.belongsTo(models.Book, {
      foreignKey: 'bookid', // This is the foreign key in the Book model
      as: 'books', // This alias will be used when querying
    });
  };

  return Reservation;
};
