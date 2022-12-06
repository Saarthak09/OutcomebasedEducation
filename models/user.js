// 'use strict';
// module.exports = async (sequelize, DataTypes) => {
//   const User = sequelize.define('users', {
//     name: DataTypes.STRING,
//     username: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING
//   }, {
//     freezeTableName:true,
//   });
//   User.associate = function(models) {
//     // associations can be defined here
//   };
//  //await User.sync();
//   return User;
// };


const { DataTypes } = require("sequelize");

const User = (sequelize) => {
  const user = sequelize.define("user", {
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
  return user;
};

module.exports = User;
