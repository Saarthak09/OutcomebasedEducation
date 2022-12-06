// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Student = sequelize.define('Student', {
//     name: DataTypes.STRING,
//     roll: DataTypes.STRING,
//     batch_of: DataTypes.STRING
//   }, {});
//   Student.associate = function(models) {
//     // associations can be defined here
//     Student.belongsTo(models.Department, { foreignKey: 'departmentId' });
//   };
//   return Student;
// };


const { DataTypes } = require("sequelize");

const Student = (sequelize) => {
  const students = sequelize.define("students", {
    name: {
      type: DataTypes.STRING,
    },
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
    },
  });
  return students;
};

module.exports = Student;
