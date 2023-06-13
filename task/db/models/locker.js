const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Locker extends Model {
    static associate({ Parcel }) {
      this.hasMany(Parcel, { foreignKey: 'lockerId' });
    }
  }
  Locker.init({
    location: DataTypes.STRING,
    accessCode: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    indoor: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Locker',
  });
  return Locker;
};
