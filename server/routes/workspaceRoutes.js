const express = require("express");
const {
  createWorkspace,
  getAllWorkspaces,
  getSingleWorkspace,
  updateWorkspace,
  deleteWorkspace,
} = require("../controllers/workspaceController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createWorkspace);
router.get("/", authMiddleware, getAllWorkspaces);
router.get("/:id", authMiddleware, getSingleWorkspace);
router.put("/:id", authMiddleware, updateWorkspace);
router.delete("/:id", authMiddleware, deleteWorkspace);

module.exports = router;