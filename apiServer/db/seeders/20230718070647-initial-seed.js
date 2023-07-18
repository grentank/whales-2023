"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        { title: "Laundry", body: "Do the laundry" },
        { title: "Groceries", body: "Buy groceries", done: true },
        { title: "Dishes", body: "Clean dishes" },
        { title: "Gym", body: "Go to the gym", done: true },
        { title: "Coffee", body: "Buy coffee" },
        { title: "Dinner", body: "Go to the dinner" },
        { title: "Shopping", body: "Buy stuff" },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
