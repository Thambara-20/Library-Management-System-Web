module.exports = (sequelize, Sequelize) => {
    const Notification = sequelize.define("notification", {
      notification_id:{
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
      book:{
        type: Sequelize.STRING
      },
      return_date: {
        type: Sequelize.DATE
      },
      is_returned: {
        type: Sequelize.BOOLEAN
      },
        is_read: {
        type: Sequelize.BOOLEAN
      }}
    );
  
  
    return Notification;
}