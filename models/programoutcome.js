// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const ProgramOutcome = sequelize.define('ProgramOutcome', {
//     name: DataTypes.STRING
//   }, {});
//   ProgramOutcome.associate = function(models) {
//     // associations can be defined here
//     ProgramOutcome.hasMany(models.Chart);
//   };
//   return ProgramOutcome;
// };



const { DataTypes } = require("sequelize");

const ProgramOutcome = (sequelize) => {
  const programoutcomes = sequelize.define("programoutcomes", {
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
  return programoutcomes;
};

module.exports = ProgramOutcome;
