module.exports = (sequelize, Sequelize) => {
const Comment = sequelize.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    text: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});
return Comment;
}

