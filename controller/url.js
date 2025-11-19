const shortid = require("shortid");
const{ URL} = require("../models/url");

async function handleGenerateNewShortURL(req, res) {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });

    const shortID = shortid();
    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.userId || null,
    });
return res.redirect('/');
}
    

async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId, createdBy: req.userId });
    
    if (!result) {
        return res.status(404).json({ error: "URL not found" });
    }

    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
}

async function handleDeleteMany(req, res) {
    const { shortIds } = req.body;
    if (!Array.isArray(shortIds) || shortIds.length === 0) {
        return res.status(400).json({ error: "shortIds array is required" });
    }
    const result = await URL.deleteMany({ shortId: { $in: shortIds }, createdBy: req.userId });
    return res.json({ deletedCount: result.deletedCount });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
    handleDeleteMany,
};