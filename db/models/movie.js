const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({ Cast, Actor }) {
      this.hasMany(Cast, { foreignKey: 'movieId' });
      // this.belongsToMany(Actor, { through: Cast, foreignKey: 'movieId' });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      duration: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
