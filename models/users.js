'use strict'
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: DataTypes.NUMBER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: DataTypes.STRING,
    username: DataTypes.STRING
  }, {})
  users.associate = function (models) {
    // associations can be defined here
  }
  return users
}
