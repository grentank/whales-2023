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

    const { data } = await axios('https://fakestoreapi.com/products');
    await queryInterface.bulkInsert(
      'Products',
      data.map((apiProduct) => ({
        title: apiProduct.title,
        description: apiProduct.description,
        price: apiProduct.price * 100,
        img: apiProduct.image,
        authorId: (apiProduct.id % 3) + 1,
      })),
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
    await queryInterface.bulkDelete('Users', null, {});
  },
};
