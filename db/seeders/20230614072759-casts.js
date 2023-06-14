/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Casts',
      [
        { movieId: 1, actorId: 1, createdAt: new Date(), updatedAt: new Date(), salary: 300 },
        { movieId: 1, actorId: 2, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 1, actorId: 3, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 2, actorId: 1, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 2, actorId: 2, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 2, actorId: 3, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 3, actorId: 4, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 3, actorId: 5, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 3, actorId: 6, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 1, actorId: 5, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 2, actorId: 7, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 4, actorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 4, actorId: 7, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 4, actorId: 6, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 5, actorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 2, actorId: 8, createdAt: new Date(), updatedAt: new Date() },
        { movieId: 1, actorId: 1, createdAt: new Date(), updatedAt: new Date(), salary: 500 },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Casts', null, {});
  },
};
