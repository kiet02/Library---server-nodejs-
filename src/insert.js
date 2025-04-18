const fs = require('fs');
const path = require('path');
const { books, authors, genres, chapterContents, chapters } = require('../data/data');
const { sequelize, Author, Book, Genre, Chapter } = require('./models');

async function importData(Model, data, modelName, extraFields = {}) {
    try {
        for (const item of data) {
            const where = {
                name: item.name,
                ...extraFields
            };
            if (item.id) where.id = item.id;
            
            await Model.findOrCreate({
                where: where,
                defaults: item
            });
        }
        console.log(`✅ Imported ${data.length} ${modelName} successfully`);
    } catch (error) {
        console.error(`❌ Error importing ${modelName}:`, error);
        throw error;
    }
}

async function importBooks() {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully');

        // Sync database to create tables
        await sequelize.sync({ force: true });
        console.log('✅ Database synced successfully');

        // Import authors first
        await importData(Author, authors, 'authors');

        // Import genres second
        await importData(Genre, genres, 'genres');

        // Import books before chapters
        const booksToImport = books.map(book => ({
            id: book.idBook, // Fix: map idBook to id
            name: book.name,
            img: book.img,
            authorId: book.authorId,
            genreId: book.genreId,
            describe: book.describe
        }));

        for (const book of booksToImport) {
            await Book.create(book);
        }
        console.log(`✅ Imported ${books.length} books successfully`);

        // Import chapters with content
        const chaptersToImport = chapterContents.map(chapter => ({
            BookId: chapter.bookId,
            chapter: `Chapter ${chapter.chapter}`,
            content: chapter.content
        }));

        for (const chapter of chaptersToImport) {
            await Chapter.create(chapter);
        }
        console.log(`✅ Imported ${chaptersToImport.length} chapters successfully`);

        console.log('🎉 All data imported successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Import failed:', error);
        process.exit(1);
    }
}

module.exports = { importBooks };


