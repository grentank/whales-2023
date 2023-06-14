/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Movies',
      [
        { title: 'The Matrix', duration: 150, createdAt: new Date(), updatedAt: new Date() },
        {
          title: 'The Matrix Reloaded',
          duration: 200,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { title: 'Frozen', duration: 100, createdAt: new Date(), updatedAt: new Date() },
        { title: 'The Dark Knight', duration: 205, createdAt: new Date(), updatedAt: new Date() },
        {
          title: 'The Dark Knight Rises',
          duration: 210,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Actors',
      [
        { name: 'Keanu Reeves', birthdate: new Date('1964-09-02') },
        { name: 'Carrie-Anne Moss', birthdate: new Date('1967-08-21') },
        { name: 'Laurence Fishburne', birthdate: new Date('1961-07-30') },
        { name: 'Kristen Anne Bell', birthdate: new Date('1980-07-18') },
        { name: 'Idina Kim Menzel', birthdate: new Date('1971-05-30') },
        { name: 'Josh Gad', birthdate: new Date('1981-02-23') },
        { name: 'Christian Charles Philip Bale', birthdate: new Date('1974-01-30') },
        { name: 'Heath Andrew Ledger', birthdate: new Date('1979-04-04') },
        { name: 'Gary Leonard Oldman', birthdate: new Date('1958-03-21') },
      ],
      {},
    );
    // Keanu Reeves, 02.09.1964
    // Carrie-Anne Moss, 21.08.1967
    // Laurence Fishburne, 30.07.1961
    // Kristen Anne Bell, 18.07.1980
    // Idina Kim Menzel, 30.05.1971
    // Josh Gad, 23.02.1981
    // Christian Charles Philip Bale, 30.01.1974
    // Heath Andrew Ledger, 04.04.1979
    // Gary Leonard Oldman, 21.03.1958
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Movies', null, {});
    await queryInterface.bulkDelete('Actors', null, {});
  },
};
