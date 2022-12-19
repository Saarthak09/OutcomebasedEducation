// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Chart = sequelize.define('Chart', {
//     fulfil: DataTypes.STRING
//   }, {});
//   Chart.associate = function(models) {
//     // associations can be defined here
//     Chart.belongsTo(models.Course, { foreignKey: 'courseId' });
//     Chart.belongsTo(models.Tool, { foreignKey: 'toolId' });
//     Chart.belongsTo(models.ProgramOutcome, { foreignKey: 'programoutcomeId' });
//   };
//   return Chart;
// };


const { DataTypes } = require("sequelize");

const Chart = (sequelize) => {
  const charts = sequelize.define("departments", {
    score: {
      type: DataTypes.DOUBLE,
    }});
    charts.associate=function(models){
      charts.belongsTo(models.Course, { foreignKey: 'courseId' });
      charts.belongsTo(models.Tool, { foreignKey: 'toolId' });
      charts.belongsTo(models.ProgramOutcome, { foreignKey: 'programoutcomeId' });
  }  
  return charts;
};

module.exports = Chart;