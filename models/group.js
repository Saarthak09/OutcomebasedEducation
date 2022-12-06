// 'use strict';
// module.exports = (sequelize, DataTypes) => {
//   const Group = sequelize.define('Group', {
//     name: DataTypes.STRING
//   }, {});
//   Group.associate = function(models) {
//     // associations can be defined here
//     Group.belongsTo(models.Course, { foreignKey: 'courseId' });
//     Group.hasMany(models.Tool);
//   };
//   return Group;
// };



const { DataTypes } = require("sequelize");

const Group = (sequelize) => {
  const groups = sequelize.define("groups", {
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
  return groups;
};

module.exports = Group;
