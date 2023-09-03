module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
    
        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        national_id: {
            type: Sequelize.STRING,

        }
    });

    return User;
};








