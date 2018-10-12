module.exports = (sequelize, Sequelize) => {  
  let Item = sequelize.define('Item', {
      description: {
        type: Sequelize.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      img: {
          type: Sequelize.STRING,
          allowNull: false
      }
    });

      Item.associate = (models) => {
        // We're saying that an item should belong to a User
        // An can't be created without an Author due to the foreign key constraint
        Item.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
      });
    };
    return Item;
  };