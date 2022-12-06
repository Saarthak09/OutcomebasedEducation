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
  return tools;
};

module.exports = Tool;
