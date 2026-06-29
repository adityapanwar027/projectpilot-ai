const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const workspaceRoutes = require("./routes/workspaceRoutes");
const authMiddleware = require("./middleware/authMiddleware");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Initialize Express App
const app = express();

// Security Middleware
app.use(helmet());

// CORS Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logger Middleware
app.use(morgan("dev"));

// Health Check Route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "ProjectPilot AI API is Running 🚀",
  });
});

// Authentication Routes
app.use("/api/auth", authRoutes);

// Workspace Routes
app.use("/api/workspaces", workspaceRoutes);

// Protected Route
app.get("/api/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Protected Route Accessed Successfully",
    user: req.user,
  });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});