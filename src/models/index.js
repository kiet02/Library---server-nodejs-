const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/database');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

// Initialize models
const Book = require('./book.model')(sequelize, DataTypes);
const User = require('./user.model')(sequelize, DataTypes);
const SaveBook = require('./savebook.model')(sequelize, DataTypes);
const History = require('./history.model')(sequelize, DataTypes);
const BookReview = require('./bookreview.model')(sequelize, DataTypes);
const Chapter = require('./chapter.model')(sequelize, DataTypes);
const Author = require('./author.model')(sequelize, DataTypes);
const Genre = require('./genre.model')(sequelize, DataTypes);

// Define associations
User.belongsToMany(Book, { through: SaveBook });
Book.belongsToMany(User, { through: SaveBook });

Book.belongsTo(Author, { foreignKey: 'authorId' });
Author.hasMany(Book, { foreignKey: 'authorId' });

Book.belongsTo(Genre, { foreignKey: 'genreId' });
Genre.hasMany(Book, { foreignKey: 'genreId' });

User.hasMany(History);
History.belongsTo(User);
Book.hasMany(History);
History.belongsTo(Book);

User.hasMany(BookReview);
BookReview.belongsTo(User);
Book.hasMany(BookReview);
BookReview.belongsTo(Book);

Book.hasMany(Chapter);
Chapter.belongsTo(Book);

module.exports = {
    sequelize,
    Book,
    User,
    SaveBook,
    History,
    BookReview,
    Chapter,
    Author,
    Genre
};

