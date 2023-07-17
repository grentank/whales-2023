const axios = require('axios');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        { name: 'Alex', email: '1@1', hashpass: bcrypt.hashSync('1', 10) },
        { name: 'Bob', email: '2@2', hashpass: bcrypt.hashSync('2', 10) },
        { name: 'Carl', email: '3@3', hashpass: bcrypt.hashSync('3', 10) },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Posts',
      [
        { title: 'Greets', body: 'Hello everyone!', authorId: 1 },
        { title: 'Goodbye', body: 'Goodbye everyone!', authorId: 2 },
        { title: 'Greetings', body: 'Greetings everyone!', authorId: 3 },
        { title: 'Good night', body: 'Good night everyone!', authorId: 1 },
        { title: 'Good morning', body: 'Good morning everyone!', authorId: 2 },
        { title: 'Good afternoon', body: 'Good afternoon everyone!', authorId: 3 },
        { title: 'Good afternoon', body: 'Good afternoon everyone!', authorId: 3 },
        { title: 'Good evening', body: 'Good evening everyone!', authorId: 1 },
        { title: 'Good night', body: 'Good night everyone!', authorId: 2 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
