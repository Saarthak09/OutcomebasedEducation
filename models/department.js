// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Department = sequelize.define('Department', {
//     name: DataTypes.STRING
//   }, {});
//   Department.associate = function(models) {
//     // associations can be defined here
//     Department.hasMany(models.Student);
//   };
//   return Department;
// };




const { DataTypes } = require("sequelize");

const Department = (sequelize) => {
  const departments = sequelize.define("departments", {
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
  return departments;
};

module.exports = Department;
