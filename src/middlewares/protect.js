const jwt = require('jsonwebtoken');
const ClinicUser = require('../models/clinicUserModel');
const bcrypt = require('bcryptjs');
const { failedResponse } = require('../utils/responses');

const clinicUserProtect = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json(failedResponse({ message: 'Token is required' }));
    }
    const [splitToken, embeddedToken] = token.split(' ');
    if (splitToken === 'Bearer') {
        // bearer token logic
        const decoded = jwt.verify(embeddedToken, process.env.JWT_SECRET);
        console.log(decoded);
        const user = await
            ClinicUser.findById(decoded.userId).select("-password");
        if (!user) {
            return res.status(401).json(failedResponse({ message: 'Invalid token' }));
        }
        req.user = user;
        next();
        return;
    }

    if (splitToken === 'Basic') {
        // basic token logic
        const decoded = Buffer.from(embeddedToken, 'base64').toString();
        const [email, password] = decoded.split(':');
        const user = await ClinicUser
            .findOne({ email: email });
        if (!user) {
            return res.status(401).json(failedResponse({ message: 'Invalid token' }));
        }
        const match = await bcrypt.compare(password, user.password);
        // remove password from user object
        user.password = undefined;
        if (match) {
            req.user = user;
            next();
            return;
        } else {
            return res.status(401).json(failedResponse({ message: 'Invalid token' }));
        }
    }
    return res.status(401).json(failedResponse({ message: 'Invalid token' }));
}
module.exports = { clinicUserProtect };