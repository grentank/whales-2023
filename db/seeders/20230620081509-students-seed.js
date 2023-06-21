const fs = require('fs').promises;
const path = require('path');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const fileData = await fs.readFile(path.resolve(__dirname, '../students.txt'), 'utf8');
    const students = fileData
      .split('\n')
      .map((row) => row.split('\t'))
      .map((rowAr) => ({ name: rowAr[0], git: rowAr[1] }));
    // console.log(fileData);
    await queryInterface.bulkInsert('Students', students, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
  },
};
