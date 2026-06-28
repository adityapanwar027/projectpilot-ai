const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
  updateUser,
  changPassword,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Register user
router.post("/register", registerUser);
// Login user
router.post("/login", loginUser);
// Get User Profile (Protected)
router.get("/profile", authMiddleware, getUserProfile);
// Update user
router.put("/profile", authMiddleware, updateUser);
// Change Password
router.put("/change-password", authMiddleware, changPassword)

module.exports = router;