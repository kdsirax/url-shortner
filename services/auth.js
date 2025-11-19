const jwt = require('jsonwebtoken');
const secret = "khushal@#$%sirvi";

function createSessionForUser(user) {
    // Token with a 7d expiry; adjust as needed
    const token = jwt.sign({ id: user._id.toString(),
        email: user.email
    }, secret, { expiresIn: '7d' });
    return token;
}

function getUserIdForSession(token) {
    if (!token) return null;
    try {
        const payload = jwt.verify(token, secret);
        return payload && payload.id ? payload.id : null;
    } catch (err) {
        return null;
    }
}

function deleteSession(token) {
    // No-op for stateless JWT. Implement blacklist if needed.
}

module.exports = {
    createSessionForUser,
    getUserIdForSession,
    deleteSession,
};


