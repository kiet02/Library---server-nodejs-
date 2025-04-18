const express = require("express");
const router = express.Router();
const userRoute = require("./user.routes");
const bookRoute = require("./book.routes");
const authorRoute = require("./author.routes");
const genreRoute = require("./genre.routes");
const chapterRoute = require("./chapter.routes");
const historyRoute = require("./history.routes");
const initRoutes = (app) => {
  // API routes with proper middleware functions

  app.use("/api/users", userRoute);
  app.use("/api/books", bookRoute);
  app.use("/api/authors", authorRoute);
  app.use("/api/genres", genreRoute);
  app.use("/api/books", chapterRoute);
  app.use("/api/history", historyRoute);

  // Error handling for undefined routes
  app.use((req, res) => {
    res.status(404).json({
      err: 1,
      msg: "Route no",
    });
  });

  return app;
};

module.exports = initRoutes;
