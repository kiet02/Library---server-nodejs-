module.exports = (sequelize, DataTypes) => {
    const SaveBook = sequelize.define('SaveBook', {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        BookId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return SaveBook;
};