// module.exports = {
//   HOST: "localhost",
//   USER: "root",
//   PASSWORD: "1234",
//   DB: "testdb",
//   dialect: "mysql",
//   pool: {
//     max: 15,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "Rasindu",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

