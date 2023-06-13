const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Parcel extends Model {
    static associate({ Locker, Item }) {
      this.belongsTo(Locker, { foreignKey: 'lockerId' });
      this.hasMany(Item, { foreignKey: 'parcelId' });
    }
  }
  Parcel.init({
    recipient: DataTypes.STRING,
    size: DataTypes.INTEGER,
    lockerId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Parcel',
  });
  return Parcel;
};
