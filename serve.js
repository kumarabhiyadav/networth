const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to allow CORS (access from any origin)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Allow requests from all origins
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  next();
});

// Serve static files from the "dist" folder
const distFolderPath = path.join(__dirname, "dist");
app.use(express.static(distFolderPath));

// Handle all other routes (for SPA support, serves `index.html`)
app.get("*", (req, res) => {
  res.sendFile(path.join(distFolderPath, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
