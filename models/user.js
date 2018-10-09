module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.String,
        allowNull: false
      },

      //placeholder for associating user with their inventory
      //reference blog example in sequelize day 3 that links authors to posts
      classMethods: {
        associate: function(models) {
        }
      }

    });
  
    return User;
  };