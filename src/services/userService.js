const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const { validateEmail, validatePassword } = require("../utils/userValidators");

const emailCheck = async (email) => {
    validateEmail(email);

    const userEmail = await userDao.userEmailCheck(email);

    if(Number(Object.values(userEmail[0])[0])) {
        const err = new Error('EMAIL_DUPLICATE')
        err.statusCode = 200;
        throw err;
    }

    if(!Number(Object.values(userEmail[0])[0])) {
        console.log(email)
        const err = new Error("EMAIL_NOT_EXISTS");
        err.statusCode = 200;
        throw err;
    }
};

const signUp = async (email, password, firstName, lastName) => {
    validateEmail(email);
    validatePassword(password);
    
    const userEmail = await userDao.userEmailCheck(email);

    if (Number(Object.values(userEmail[0])[0])) {
        const err = new Error('EMAIL_DUPLICATE')
        err.statusCode = 409;
        throw err;
    }

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
    
    const userEmail = await userDao.userEmailCheck(email);

    if (!Number(Object.values(userEmail[0])[0])) {
        const err = new Error("EMAIL_OR_PASSWORD_IS_DIFFERENT");
        err.statusCode = 400;
        throw err;
    }

    const passwordCheck = await userDao.passwordCheck(email);

    const userPassword = await bcrypt.compare(password, passwordCheck[0].password);
    
    if (!userPassword) {
        const err = new Error("EMAIL_OR_PASSWORD_IS_DIFFERENT");
        err.statusCode = 400;
        throw err;
    }

    const accessToken = jwt.sign({ email }, process.env.JWT_SECRET);

    return accessToken;
};

module.exports = {
    signUp,
    signIn,
    emailCheck,
};
