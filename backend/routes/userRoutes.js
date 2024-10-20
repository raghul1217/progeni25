const express = require('express');
const router = express.Router();
const User = require('../modal/Users');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const secreteKey = "swer&*&^#*&^@HJHjsdhfksdfhskfhw9853734598374";

// Middleware to generate the next sequence ID
async function getNextSequenceId() {
    // Fetch the latest user based on sequenceId
    const latestUser = await User.findOne().sort({ sequenceId: -1 });
    // Increment the sequenceId or start with 101 if no users exist
    return latestUser ? latestUser.sequenceId + 1 : 101;
}

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, department, collegeName, mobile } = req.body;
        if (!name || !email || !password || !department || !collegeName || !mobile) {
            return res.status(400).json({ status: false, message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ status: false, message: "Email Already registered" });
        }

        const hashPassword = await bcrypt.hash(password, 10);
        
        // Generate sequenceId
        const sequenceId = await getNextSequenceId();

        const newUser = new User({ 
            name, 
            email, 
            password: hashPassword, 
            department, 
            collegeName, 
            mobile, 
            sequenceId, 
            customId: `progeni25${sequenceId}`
        });
        
        await newUser.save();

        return res.status(201).json({ status: true, message: "Register successful" });
    } catch (error) {
        return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ status: false, message: "All fields are required" });

        const user = await User.findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ status: false, message: "Invalid Credential" });
        }

        const token = jwt.sign({ id: user._id, email: user.email }, secreteKey, { expiresIn: '1hr' });

        return res.status(201).json({ status: true, message: "Login successful", token: token });
    } catch (error) {
        return res.status(400).json({ status: false, message: "Something went wrong", error: error.message });
    }
});

// Profile
router.post('/profile', async (req, res) => {
    try {
        const token = req.headers?.authorization?.split(' ')[1];
        if (!token) return res.status(400).json({ status: false, message: "Access Denied" });

        jwt.verify(token, secreteKey, async (err, decode) => {
            if (err) return res.status(400).json({ status: false, message: "Invalid Token" });

            const user = await User.findById(decode?.id);
            if (!user) return res.status(400).json({ status: false, message: "User not found" });

            const userData = {
                customId: user.customId,
                name: user.name,
                email: user.email,
                department: user.department,
                collegeName: user.collegeName,
                mobile: user.mobile,
                paymentStatus: user.paymentStatus // Include paymentStatus in the response
            };

            return res.status(200).json({ status: true, message: "Profile Data", data: userData });
        });
    } catch (error) {
        return res.status(500).json({ status: false, message: "Something went wrong", error: error.message });
    }
});


module.exports = router;
