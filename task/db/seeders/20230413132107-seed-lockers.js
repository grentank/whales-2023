/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Lockers',
      [{
        location: 'ул. Ленина, д. 10', accessCode: '6hi8uu0n', capacity: 16, indoor: true,
      }, {
        location: 'ул. Пушкина, д. 15', accessCode: '5lilbrou', capacity: 25, indoor: false,
      }, {
        location: 'ул. Гагарина, д. 5', accessCode: '1k3kiofi', capacity: 22, indoor: true,
      }, {
        location: 'ул. Галушкина, д. 53', accessCode: '4g2yqgky', capacity: 22, indoor: true,
      }, {
        location: 'ул. Кирова, д. 20', accessCode: '3vx6r1wx', capacity: 23, indoor: true,
      }, {
        location: 'ул. Радонежского, д. 21', accessCode: 'achttrsv', capacity: 17, indoor: false,
      }, {
        location: 'пер. Ростова, д. 18', accessCode: 'q3pz0ia1', capacity: 23, indoor: false,
      }, {
        location: 'пр-т Мира, д. 108', accessCode: 'vjdfyqht', capacity: 22, indoor: true,
      }, {
        location: 'пр-т Юбилейный, д. 19', accessCode: 'rb7s94i4', capacity: 28, indoor: true,
      }, {
        location: 'ул. Шаболовка, д. 69/32', accessCode: 'np5gxgmj', capacity: 21, indoor: true,
      }],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Lockers', null, {});
  },
};
