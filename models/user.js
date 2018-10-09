module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.String,
        allowNull: false
      }

    });
  
    return User;
  };