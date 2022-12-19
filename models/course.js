// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Course = sequelize.define('Course', {
//     name: DataTypes.STRING,
//     code: DataTypes.STRING,
//     semester: DataTypes.INTEGER
//   }, {});
//   Course.associate = function(models) {
//     // associations can be defined here
//     Course.hasMany(models.Group);
//     Course.hasMany(models.Chart);
//   };
//   return Course;
// };



const { DataTypes } = require("sequelize");

const Course = (sequelize) => {
  const courses = sequelize.define("courses", {
    name: {
      type: DataTypes.STRING,
    },
    code: {
      type: DataTypes.STRING,
    },
    semester: {
      type: DataTypes.INTEGER,
    },
  });
  courses.associate = function(models) {
    //     // associations can be defined here
    courses.hasMany(models.Group);
    courses.hasMany(models.Chart);
    };
  return courses; 
};

module.exports = Course;