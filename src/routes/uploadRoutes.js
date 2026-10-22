const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();
const upload = require("../middleware/upload");
const { requireAdmin } = require("../middleware/adminAuth");

function uploadedResponse(req, res) {
  if (!req.file) return res.status(400).json({ success: false, message: "No file uploaded." });
  return res.json({
    success: true,
    message: "File uploaded successfully.",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
  });
}

router.post("/image", requireAdmin, upload.single("image"), uploadedResponse);
router.post("/video", requireAdmin, upload.single("video"), uploadedResponse);

router.post("/remove", requireAdmin, (req, res) => {
  const filename = path.basename(String(req.body.publicId || req.body.filename || ""));
  if (!filename) return res.status(400).json({ success: false, message: "File name is required." });

  const target = path.join(process.cwd(), "uploads", filename);
  if (!fs.existsSync(target)) return res.status(404).json({ success: false, message: "File not found." });

  try {
    fs.unlinkSync(target);
    return res.json({ success: true, message: "File removed." });
  } catch (error) {
    console.error("REMOVE UPLOAD:", error);
    return res.status(500).json({ success: false, message: "Unable to remove file." });
  }
});

module.exports = router;
