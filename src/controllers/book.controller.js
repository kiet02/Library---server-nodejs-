const { Sequelize, where } = require('sequelize');
const { Book, SaveBook, BookReview, Chapter, History, User, Author, Genre } = require('../models');

// Book operations
exports.getAllBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const offset = (page - 1) * limit;

        const { count, rows: books } = await Book.findAndCountAll({
            limit,
            offset,
            include: [
                { model: Author, attributes: ['id', 'name'] },
                { model: Genre, attributes: ['id', 'name'] }
            ],
            distinct: true
        });

        const totalPages = Math.ceil(count / limit);

        res.json({
            err: books.length ? 0 : 1,
            data: books.length ? {
                books,
                pagination: {
                    currentPage: page,
                    totalPages,
                    totalItems: count,
                    itemsPerPage: limit,
                    hasNext: page < totalPages,
                    hasPrevious: page > 1
                }
            } : 'No books found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.getRandomBooks = async (req, res) => {
    try {
        const { limit, id, authorId, genreId } = req.query;

        const books = await Book.findAll({
            include: [
                { model: Author, attributes: ['id', 'name'] },
                { model: Genre, attributes: ['id', 'name'] }
            ],
            where: {
                ...(id && { id }),
                ...(authorId && { authorId }),
                ...(genreId && { genreId }),
            },
            order: Sequelize.literal('RAND()'),
            limit: limit ? parseInt(limit) : 5,
        });

        res.json(
             books.length ? books : 'No books found'
        );
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};



exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        res.json({
            err: book ? 0 : 1,
            data: book || 'Book not found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.addBook = async (req, res) => {
    try {
        const { name, authorId, genreId, describe, img } = req.body;

        // Verify user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admin only.'
            });
        }

        // Check if book already exists
        const existingBook = await Book.findOne({ where: { name } });
        if (existingBook) {
            return res.status(400).json({
                success: false,
                message: 'Book already exists'
            });
        }

        // Verify author exists
        const author = await Author.findByPk(authorId);
        if (!author) {
            return res.status(404).json({
                success: false,
                message: 'Author not found'
            });
        }

        // Verify genre exists
        const genre = await Genre.findByPk(genreId);
        if (!genre) {
            return res.status(404).json({
                success: false,
                message: 'Genre not foundsss'
            });
        }

        // Create new book
        const newBook = await Book.create({
            name,
            authorId,
            genreId,
            describe,
            img
        });

        res.status(201).json({
            success: true,
            message: 'Book added successfully',
            data: newBook
        });
    } catch (error) {
        console.error('Error adding book:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, authorId, genreId, describe, img } = req.body;

        // Verify user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admin only.'
            });
        }

        // Check if book exists
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        // Update book
        await book.update({
            name: name || book.name,
            authorId: authorId || book.authorId,
            genreId: genreId || book.genreId,
            describe: describe || book.describe,
            img: img || book.img
        });

        res.json({
            success: true,
            message: 'Book updated successfully',
            data: book
        });
    } catch (error) {
        console.error('Error updating book:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;

        // Verify user is admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: 'Access denied. Admin only.'
            });
        }

        // Check if book exists
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }

        // Delete book
        await book.destroy();

        res.json({
            success: true,
            message: 'Book deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
};

// Bookmark operations
exports.addBookmark = async (req, res) => {
    try {
        const bookmark = await SaveBook.create({
            UserId: req.user.id,
            BookId: req.body.BookId 
        });
        res.status(201).json({ 
            success: true, 
            data: bookmark 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
};

exports.getBookmarks = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId, {
            include: [{
                model: Book,
                through: SaveBook,
                include: [
                    { model: Author, attributes: ['id', 'name'] },
                    { model: Genre, attributes: ['id', 'name'] }
                ]
            }]
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.json({
            success: true,
            data: user.Books
        });
    } catch (error) {
        console.error('Error getting bookmarks:', error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.removeBookmark = async (req, res) => {
    try {
        const { bookId } = req.params;
        
        const deleted = await SaveBook.destroy({
            where: {
                BookId: bookId,
                UserId: req.user.id
            }
        });

        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: 'Bookmark not found'
            });
        }

        res.json({
            success: true,
            message: 'Bookmark removed successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Review operations
exports.addReview = async (req, res) => {
    try {
        const { BookId , comment, rate } = req.body;
        const review = await BookReview.create({
            UserId : req.user.id,
            BookId ,
            comment,
            rate
        });
        res.status(201).json({ err: 0, data: review });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.getBookReviews = async (req, res) => {
    try {
        const reviews = await BookReview.findAll({
            where: { BookId : req.params.id },
            include: [{
                model: User,
                attributes: ['name', 'image']
            }]
        });
        res.json({
            err: reviews.length ? 0 : 1,
            data: reviews.length ? reviews : 'No reviews found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};


// Chapter operations
exports.getChapters = async (req, res) => {
    try {
        const chapters = await Chapter.findAll({
            where: { BookId : req.params.id },
            attributes: ['id', 'chapter','content']
        });
        res.json({
            err: chapters.length ? 0 : 1,
            data: chapters.length ? chapters : 'No chapters found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};

exports.getChapterContent = async (req, res) => {
    try {
        const chapter = await Chapter.findOne({
            where: {
                BookId : req.params.id,
                id: req.params.chapterId
            }
        });
        res.json({
            err: chapter ? 0 : 1,
            data: chapter || 'Chapter not found'
        });
    } catch (error) {
        res.status(500).json({ err: 1, msg: error.message });
    }
};