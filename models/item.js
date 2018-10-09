module.exports = function(sequelize, DataTypes) {
    var Item = sequelize.define("Item", {

      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: DataTypes.String,
        allowNull: false
      },
      img: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

      Item.associate = function(models) {
        // We're saying that a Closet should belong to a User
        // A Closet can't be created without an Author due to the foreign key constraint
        Item.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
      });

    };
  
    return Item;
  };