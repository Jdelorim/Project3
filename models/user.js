module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {

      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      }

    });
  
    return User;
  };