require("dotenv").config();
const express = require("express");
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const { sequelize } = require("../src/models");
const initRoutes = require("../src/routes");
const path = require("path");
const db = require("./models");
// const { importBooks } = require('./insert');
const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize routes
initRoutes(app);

// Đọc SSL cert
const options = {
  key: fs.readFileSync(path.join(__dirname, "ssl", "private.key")),
  cert: fs.readFileSync(path.join(__dirname, "ssl", "certificate.crt")),
};

const PORT = process.env.PORT || 5000;

const startServer = (port) => {
  const server = https
    .createServer(options, app)
    .listen(port, () => {
      console.log(`🔒 HTTPS Server is running on port ${port}`);
    })
    .on("error", (err) => {
      if (err.code === "EADDRINUSE") {
        console.log(`⚠️ Port ${port} is busy, trying ${port + 1}...`);
        startServer(port + 1);
      } else {
        console.error("❌ Server error:", err);
      }
    });
};

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database synced successfully.");
    startServer(PORT);
  })
  .catch((err) => {
    console.error("❌ Unable to sync database:", err);
  });
