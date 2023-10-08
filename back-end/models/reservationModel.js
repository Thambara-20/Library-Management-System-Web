module.exports = (sequelize, Sequelize) => {
  const Reservation = sequelize.define("reservation", {
    reservation_id:{
      type: Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    name: {
      type: Sequelize.STRING
    },
    bookid: {
      type: Sequelize.INTEGER
    },
    },{
    timestamps: false
  }
  );


  return Reservation;
};
