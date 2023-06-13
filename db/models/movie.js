const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate({ Studio }) {
      this.belongsTo(Studio, { foreignKey: 'studioId' });
    }
  }
  Movie.init(
    {
      title: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      studioId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Movie',
    },
  );
  return Movie;
};
