"use strict";
module.exports = (sequelize, DataTypes) => {
  const review = sequelize.define(
    "review",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stars: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
      userName: {
        type: DataTypes.STRING,
      },
    },
    {}
  );
  review.associate = function (models) {
    review.belongsTo(models.user);
    review.belongsTo(models.park);
  };
  return review;
};
