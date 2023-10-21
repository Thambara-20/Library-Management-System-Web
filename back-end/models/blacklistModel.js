module.exports = (sequelize, Sequelize) => {
    const Blacklist = sequelize.define("blacklist", {
        name: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        token: {
            type: Sequelize.STRING
        }
    });
    return Blacklist;
}