const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate({ Parcel }) {
      this.belongsTo(Parcel, { foreignKey: 'parcelId' });
    }
  }
  Item.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    weight: DataTypes.INTEGER,
    parcelId: DataTypes.INTEGER,
    fragile: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Item',
  });
  return Item;
};
