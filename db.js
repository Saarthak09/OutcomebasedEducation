const Sequelize = require("sequelize");
const User = require("./models/user");

// const host = process.env.MYSQL_DB_HOST;
// const dbName = process.env.MYSQL_DB_NAME;
// const user = process.env.MYSQL_DB_USER;
// const password = process.env.MYSQL_DB_PASSWORD;

// "username": "root",
const password= "obepass";
const user="root"
const  dbName= "outcomebased";
const  host= "127.0.0.1";
const dialect = "mysql";

// const host = "";
// const user = "";
// const password = "";
// const dbName = "";

const sequelize = new Sequelize(dbName, user, password, {
  host,
  dialect,
  pool: { max: 10, min: 0, idle: 10000 },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("sdjkgbskjgrb");
    console.log("Connected with DB");
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });

const etsuDB = {};

etsuDB.sequelize = sequelize;
etsuDB.Sequelize = Sequelize;
etsuDB.users = User(sequelize);

etsuDB.sequelize
  .sync()
  .then(() => {
    console.log("Db Synced!");
  })
  .catch((err) => {
    throw err;
  });

module.exports = etsuDB;
