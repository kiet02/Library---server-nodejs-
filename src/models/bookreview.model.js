module.exports = (sequelize, DataTypes) => {
    const BookReview = sequelize.define('BookReview', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        comment: DataTypes.STRING,
        rate: {
            type: DataTypes.FLOAT,
            validate: {
                min: 0,
                max: 5
            }
        },
        idUser: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idBook: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    return BookReview;
};