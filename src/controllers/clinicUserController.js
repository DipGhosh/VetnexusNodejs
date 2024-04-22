const ClinicUser = require("../models/clinicUserModel");
const clinicUserRouter = require("../routes/clinicUser");
const { successResponse, failedResponse } = require("../utils/responses");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = {
    signup: async (req, res) => {
        try {

            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json(failedResponse({ message: "Email and password are required" }));
            }
            const user = await ClinicUser.findOne({ email });
            if (user) {
                return res.status(400).json(failedResponse({ message: "User Already Exists" }));
            }
            const hashedPassword = await bcrypt.hash(password, 10);
            req.body.password = hashedPassword;
            const newUser = { ...req.body };

            const data = await ClinicUser.create(newUser);

            return res.status(201).json(successResponse({ message: "User created successfully" }));
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            if (!email || !password) {
                return res.status(400).json({ message: "Email and password are required" });
            }
            const user = await ClinicUser.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: "User does not exist" });
            }
            const match = await bcrypt.compare(password, user.password);
            if (!match) {
                return res.status(400).json({ message: "Invalid password" });
            }
            const token = jwt.sign({ email: user.email, userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return res.status(200).json({ message: "Login successful", data: { token } });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
    userDetails: async (req, res) => {
        try {
            return res.status(200).json({
                message: "Login verified", data:
                    req.user

            });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
}