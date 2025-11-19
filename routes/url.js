const express = require("express");
const router = express.Router();
const {handleGenerateNewShortURL, handleGetAnalytics, handleDeleteMany} = require("../controller/url");
const { requireAuth } = require("../middleware/auth");



router.post('/', requireAuth, handleGenerateNewShortURL);
router.get("/analytics/:shortId", requireAuth, handleGetAnalytics);
router.post('/delete-many', requireAuth, handleDeleteMany);
module.exports = router;
