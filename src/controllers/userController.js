const userService = require("../services/userService");

const emailCheck = async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }

        await userService.emailCheck(email);

        res.status(201).json({ message: email });
    } catch (err) {
        res.status(err.statusCode ? err.statusCode : 400).json({
            message: err.message,
        });
    }
};

const signUp = async (req, res) => {
    try {
        const { email, password, firstName, lastName } = req.body;

        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: "KEY_ERROR" });
        }

        await userService.signUp(email, password, firstName, lastName );

        res.status(201).json({ message: "USER_CREATE" });
    } catch (err) {
        res.status(err.statusCode ? err.statusCode : 400).json({
            message: err.message,
        });
    }
};

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        const TOKEN = await userService.signIn(email, password);

        res.status(200).json({ Token: TOKEN });
    } catch (err) {
        res.status(err.statusCode ? err.statusCode : 401).json({
            message: err.message,
        });
    }
};

module.exports = {
    signUp,
    signIn,
    emailCheck,
};
