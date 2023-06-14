const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Cast extends Model {
    static associate({ Actor, Movie }) {
      this.belongsTo(Actor, { foreignKey: 'actorId' });
      this.belongsTo(Movie, { foreignKey: 'movieId' });
    }
  }
  Cast.init(
    {
      movieId: DataTypes.INTEGER,
      actorId: DataTypes.INTEGER,
      salary: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Cast',
    },
  );
  return Cast;
};
