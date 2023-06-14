const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {
    static associate({ Cast, Movie }) {
      this.hasMany(Cast, { foreignKey: 'actorId' });
      // this.belongsToMany(Movie, { through: Cast, foreignKey: 'actorId' });
    }
  }
  Actor.init(
    {
      name: DataTypes.STRING,
      birthdate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Actor',
    },
  );
  return Actor;
};
