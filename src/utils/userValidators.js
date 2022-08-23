const BaseError = require("../middlewares/baseError");

const validateEmail = (email) => {
    const em = new RegExp(
        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
    );

    if (!em.test(email))
        throw new BaseError("EMAIL_OR_PASSWORD_NOT_AVAILABLE", 400);
};

const validatePassword = (password) => {
    const pw = new RegExp(
        /^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20}$)/
    );
    if (!pw.test(password))
        throw new BaseError("EMAIL_OR_PASSWORD_NOT_AVAILABLE", 400);
}

module.exports = {
    validateEmail,
    validatePassword
};
