const express = require("express");
const { createWorkspace } = require("../controllers/workspaceController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Workspace
router.post("/", authMiddleware, createWorkspace);

module.exports = router;