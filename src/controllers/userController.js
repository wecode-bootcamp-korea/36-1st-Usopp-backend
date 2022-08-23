const userService = require("../services/userService");
const BaseError = require("../middlewares/baseError");

const emailCheck = async (req, res) => {
        const { email } = req.body;

        if (!email) throw new BaseError("KEY_ERROR", 400);

        await userService.emailCheck(email);

        res.status(201).json({ message: email });
};

const signUp = async (req, res) => {
        const { email, password, firstName, lastName } = req.body;

        if (!email || !password || !firstName || !lastName) throw new BaseError('KEY_ERROR', 400)
        

        await userService.signUp(email, password, firstName, lastName);

        res.status(201).json({ message: "USER_CREATE" });
};

const signIn = async (req, res) => {
        const { email, password } = req.body;

        const TOKEN = await userService.signIn(email, password);

        res.status(200).json({ Token: TOKEN });
};

module.exports = {
    signUp,
    signIn,
    emailCheck,
};
