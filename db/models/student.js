const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    static associate({ Message }) {
      this.hasMany(Message, { foreignKey: 'authorId' });
    }
  }
  Student.init(
    {
      name: DataTypes.STRING,
      git: DataTypes.TEXT,
      bonus: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Student',
    },
  );
  return Student;
};
