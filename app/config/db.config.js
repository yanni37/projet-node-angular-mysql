module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "12345",
  DB: "NodeProjetDb",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
