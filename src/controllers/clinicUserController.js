const ClinicUser = require("../models/clinicUserModel");
const clinicUserRouter = require("../routes/clinicUser");
const { successResponse, failedResponse } = require("../utils/responses");

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
            const newUser = { email, password };
            const data = await ClinicUser.create(newUser);

            return res.status(201).json(successResponse({ message: "User created successfully", data }));
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
            if (user.password !== password) {
                return res.status(400).json({ message: "Invalid password" });
            }
            return res.status(200).json({ message: "Login successful" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    },
}