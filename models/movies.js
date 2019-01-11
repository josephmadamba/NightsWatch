'use strict'
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    id: DataTypes.NUMBER,
    movie_genre: DataTypes.STRING,
    movie_title: DataTypes.STRING,
    movie_id: DataTypes.STRING
  }, {})
  movies.associate = function (models) {
    // associations can be defined here
  }
  return movies
}
