module.exports = function (sequelize, DataTypes) {

    var burger = sequelize.define("burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 60]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: False
        }
    });

    // Record id of customer who eats the burger
    Burger.associate = function (models) {
        Burger.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return burger;
};