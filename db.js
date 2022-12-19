const Sequelize = require("sequelize");
const User = require("./models/user");
const Course=require("./models/course");
const Department = require("./models/department");
const Student = require("./models/student");
const ProgramOutcome = require("./models/programoutcome");
const Assessment = require("./models/assessment");
const Tool = require("./models/tool");
const Chart = require("./models/chart");
const Group=require("./models/group")
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

etsuDB.Sequelize = Sequelize;
etsuDB.sequelize=sequelize
etsuDB.users = User(sequelize);
etsuDB.courses=Course(sequelize);
etsuDB.groups=Group(sequelize);
etsuDB.departments=Department(sequelize);
etsuDB.students=Student(sequelize);
etsuDB.programoutcomes=ProgramOutcome(sequelize);
etsuDB.assesments=Assessment(sequelize);
etsuDB.tools=Tool(sequelize);
etsuDB.charts=Chart(sequelize);

etsuDB.sequelize
  .sync()
  .then(() => {
    console.log("Db Synced!");
  })
  .catch((err) => {
    throw err;
  });

module.exports = etsuDB;
