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
          userId: 1,
          reports: 0,
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
          userId: 1,
          reports: 0,
        },
        {
          title: "Cabañeros National Park",
          description:
            "It is the best and largest surviving area of Iberian Mediterranean forest, with an enormous variety of plant species.",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594917533/spain_yjv09q.jpg",
          country: "Spain",
          type: "flat",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          reports: 0,
        },
        {
          title: "Abisko national park",
          description:
            "You will find the Abiskodalen valley here, covered with mountain birch trees, and beautiful and easily accessible Mount Njullá, known for its profusion of flowers.",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594976091/abisko-nationalpark-lapporten_zfmmzu.jpg",
          country: "Sweden",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          reports: 0,
        },
        {
          title: "Picos de Europa",
          description:
            "The southern flanks of the Picos de Europa has some of the park’s prettiest villages.",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594917417/spain_csitpw.jpg",
          country: "Spain",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          reports: 0,
        },
        {
          title: "Lake Constance",
          description:
            " Waterfalls explode out of these cliffs and streams run through forests of Canary Island pine. ",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594975022/lake_constance_qpbncu.jpg",
          country: "Germany",
          type: "lake",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          reports: 0,
        },
        {
          title: "Caldera de Taburiente",
          description:
            " Waterfalls explode out of these cliffs and streams run through forests of Canary Island pine. ",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594917325/spain_xxwlrp.jpg",
          country: "Spain",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2,
          reports: 0,
        },
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
          userId: 1,
          reports: 0,
        },
        {
          title: "Yosemite",
          description: "You can see waterfalls here",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594975807/VC_FallFoliage_Module3_YosemiteNationalPark_Supplied_Falls_Delaware_North_at_Yosemite_1280x640_td5fuy.jpg",
          country: "United States",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          reports: 0,
        },
        {
          title: "Pieljekaise National Park",
          description:
            "Pieljekaise National Park is in the Arjeplog mountains between Jäckvik and Adolfström.",
          image:
            "http://res.cloudinary.com/parkadvisor/image/upload/v1594975989/pieljekaise-nationalpark-geologi_dvsikn.jpg",
          country: "Sweden",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          reports: 0,
        },
        {
          title: "Vadvetjåkka national park",
          description:
            "Vadvetjåkka is a small national park in a remote and desolate alpine region north-west of Torneträsk lake. The park is named for Mount Vadvetjåkka, which dominates the area.",
          image:
            "http://www.nationalparksofsweden.se/globalassets/vadvetjakka/textsida-topp-945x500/vadvetjakka-topp-textsida-fjallet-besoksinfo.jpg",
          country: "Sweden",
          type: "mountain",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1,
          reports: 0,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("parks", null, {});
  },
};
