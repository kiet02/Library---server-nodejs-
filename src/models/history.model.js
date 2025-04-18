module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        location: DataTypes.STRING,
        chapter: DataTypes.INTEGER,
        complete: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        value: DataTypes.FLOAT,
    }, {
        indexes: [
          {
            unique: true,
            fields: ['UserId', 'BookId'] // <-- ràng buộc UNIQUE tại đây
          }
        ]
      });

    return History;
};