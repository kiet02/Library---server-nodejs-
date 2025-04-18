module.exports = (sequelize, DataTypes) => {
    const Chapter = sequelize.define('Chapter', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        chapter: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT
        }
    });

    return Chapter;z
};