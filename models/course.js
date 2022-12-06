'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    semester: DataTypes.INTEGER
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.hasMany(models.Group);
    Course.hasMany(models.Chart);
  };
  return Course;
};



// const { DataTypes } = require("sequelize");

// const Course = (sequelize) => {
//   const courses = sequelize.define("courses", {
//     name: {
//       type: DataTypes.STRING,
//     },
//     username: {
//       type: DataTypes.STRING,
//     },
//     email: {
//       type: DataTypes.STRING,
//     },

//     password: {
//       type: DataTypes.STRING,
//     },
//   });
//   return departments;
// };

// module.exports = Course;