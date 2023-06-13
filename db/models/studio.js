const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Studio extends Model {
    static associate({ Movie }) {
      this.hasMany(Movie, { foreignKey: 'studioId' });
    }
  }
  Studio.init(
    {
      name: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Studio',
    },
  );
  return Studio;
};
