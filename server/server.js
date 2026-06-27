const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const morgon = require("morgan");
const connectDB = require("./config/db")

// Load environment variables
dotenv.config();
connectDB();

// Create express app
const app = express();

//Security middleware
app.use(helmet());

// Enable cors
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: "true",
    })
);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// Logger Middleware
app.use(morgon("dev"));

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message : "ProjectPilot AI API is running"
    });
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is rinnung on http://localhost:${PORT}`);
});
