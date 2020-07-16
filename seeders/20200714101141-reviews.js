"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "reviews",
      [
        {
          name: "Amazing park!",
          stars: 5,
          description:
            "Elit in magna nostrud exercitation velit cupidatat eu veniam eiusmod.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          parkId: 1,
          userName: "Jenni",
        },
        {
          name: "Flat park",
          stars: 5,
          description:
            "Elit in magna nostrud exercitation velit cupidatat eu veniam eiusmod.",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          parkId: 2,
          userName: "Paula",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("reviews", null, {});
  },
};
