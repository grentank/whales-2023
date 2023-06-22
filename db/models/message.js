const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate({ Student }) {
      this.belongsTo(Student, { foreignKey: 'authorId' });
    }
  }
  Message.init(
    {
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      authorId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Message',
    },
  );
  return Message;
};
