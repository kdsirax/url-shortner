function parseCookies(cookieHeader) {
    if (!cookieHeader) return {};
    return cookieHeader.split(';').reduce((acc, part) => {
        const [key, ...v] = part.trim().split('=');
        acc[key] = decodeURIComponent(v.join('='));
        return acc;
    }, {});
}

const { getUserIdForSession } = require("../services/auth");

function cookieParser(req, res, next) {
    req.cookies = parseCookies(req.headers.cookie);
    next();
}

function attachUserFromSession(req, res, next) {
    const token = req.cookies && req.cookies.token;
    if (!token) return next();
    const userId = getUserIdForSession(token);
    if (userId) {
        req.userId = userId;
    }
    next();
}

module.exports = {
    cookieParser,
    attachUserFromSession,
    requireAuth: function(req, res, next) {
        if (!req.userId) {
            return res.redirect('/login');
        }
        next();
    },
};


