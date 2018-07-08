module.exports = function(sequelize, DataTypes) {
  var Meal = sequelize.define("Meal", {
    mainCourse: {
      type: DataTypes.STRING,
      required: true,
      trim: true,
      len: [3,255],
      allowNull: false,
    },
    side: {
      type: DataTypes.STRING,
      required: false,
      trim: true,
      len: [3,255],
      allowNull: true
    }
  });

  Meal.associate = function(models) {
    Meal.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Meal;
};
