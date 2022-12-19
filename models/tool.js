// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Tool = sequelize.define('Tool', {
//     name: DataTypes.STRING
//   }, {});
//   Tool.associate = function(models) {
//     // associations can be defined here
//     Tool.belongsTo(models.Group, { foreignKey: 'groupId' } );
//     Tool.hasMany(models.Chart);
//   };
//   return Tool;
// };



const { DataTypes } = require("sequelize");

const Tool = (sequelize) => {
  const tools = sequelize.define("tools", {
    name: {
      type: DataTypes.STRING,
    },
  });
  tools.associate = function(models) {
    // associations can be defined here
    tools.belongsTo(models.Group, { foreignKey: 'groupId' } );
    tools.hasMany(models.Chart);
  };
  return tools;
};

module.exports = Tool;
