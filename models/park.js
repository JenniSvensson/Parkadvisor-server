"use strict";
module.exports = (sequelize, DataTypes) => {
  const park = sequelize.define(
    "park",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  park.associate = function (models) {
    park.belongsTo(models.user);
    park.belongsToMany(models.user, {
      through: "likes",
      foreignKey: "parkId",
    });
  };
  return park;
};
