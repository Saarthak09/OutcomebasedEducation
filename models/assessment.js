// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Assessment = sequelize.define('Assessment', {
//     score: DataTypes.DOUBLE
//   }, {});
//   Assessment.associate = function(models) {
//     // associations can be defined here
//     Assessment.belongsTo(models.Student, { foreignKey: 'studentId' });
//     Assessment.belongsTo(models.Course, { foreignKey: 'courseId' });
//     Assessment.belongsTo(models.ProgramOutcome, { foreignKey: 'programoutcomeId' });
//   };
//   return Assessment;
// };

const { DataTypes } = require("sequelize");

const Assessment = (sequelize) => {
  const assessments = sequelize.define("assessments", {
    score: {
      type: DataTypes.DOUBLE,
    }});
    assessments.associate=function(models){
      assessments.belongsTo(models.Student, { foreignKey: 'studentId' });
      assessments.belongsTo(models.Course, { foreignKey: 'courseId' });
      assessments.belongsTo(models.ProgramOutcome, { foreignKey: 'programoutcomeId' });
  }  
  return assessments;
};

module.exports = Assessment;
