module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {

      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }

    });
  
    return User;
  };