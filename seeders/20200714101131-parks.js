"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "parks",
      [
        {
          title: "Mercantour National Park",
          description:
            "One of the most spectacular national parks in France, the Mercantour National Park attracts thousand of visitors each year.",
          image:
            "http://www.francewanderer.com/wp-content/uploads/2012/10/The-Mercantour-National-Park-photo-by-gllm.bernard.jpg",
          country: "France",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hoge Veluwe National Park",
          description:
            "Nature reserve with red deer & wild boar, heath, woodland & dunes, plus cycling and walking trails.",
          image:
            "https://www.hogeveluwe.nl/system/images/images/000/000/077/gallery_zoom/Fietsen_Robbert_Maas_015.jpg?1436872610",
          country: "Netherlands",
          type: "flat",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parks", null, {});
  },
};
