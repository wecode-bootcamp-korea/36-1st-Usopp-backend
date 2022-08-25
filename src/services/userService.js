const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const BaseError = require("../middlewares/baseError");
const { validateEmail, validatePassword } = require("../utils/userValidators");

const emailCheck = async (email) => {
    validateEmail(email);

    const userEmail = await userDao.userEmailCheck(email);

    if (Number(Object.values(userEmail[0])[0])) throw new BaseError("EMAIL_DUPLICATE", 200)

    if (!Number(Object.values(userEmail[0])[0])) throw new BaseError("EMAIL_NOT_EXISTS", 200)
};

const signUp = async (email, password, firstName, lastName) => {
    validateEmail(email);
    validatePassword(password);

    const userEmail = await userDao.userEmailCheck(email);

    if (Number(Object.values(userEmail[0])[0])) throw new BaseError("EMAIL_DUPLICATE", 200)

    const hashedPassword = await bcrypt.hash(password, 12);
    const createUser = await userDao.createUser(
        email,
        hashedPassword,
        firstName,
        lastName
    );
    return createUser;
};

const signIn = async (email, password) => {
    const user = await userDao.userLogin(email);

    if (!Number(Object.values(user)[0])) throw new BaseError("EMAIL_OR_PASSWORD_IS_DIFFERENT", 200)

    const passwordCheck = await userDao.passwordCheck(email);
    const userPassword = await bcrypt.compare(password, passwordCheck[0].password);

    if (!userPassword) throw new BaseError("EMAIL_OR_PASSWORD_IS_DIFFERENT", 200)

    const accessToken = jwt.sign({ sub: user.userId, email: user.email }, process.env.JWT_SECRET);
    
    return accessToken;
};
module.exports = {
    signUp,
    signIn,
    emailCheck,
};