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
  });
  programoutcomes.associate = function(models) {
    // associations can be defined here
    programoutcomes.hasMany(models.Chart);
  };
  return programoutcomes;
};

module.exports = ProgramOutcome;
