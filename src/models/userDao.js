const BaseError = require("../middlewares/baseError");
const database = require("./datasource");

const userEmailCheck = async (email) => {
    try {
        return await database.query(
            `
        SELECT EXISTS(
            SELECT 
                email 
            FROM users 
            WHERE email = '${email}')
        `
        );
    } catch (err) {
        throw new BaseError("INVALID_DATA_INPUT", 500);
    }
};

const userLogin = async (email) => {
    try {
        const [result] = await database.query(
            `
            SELECT
                id userId,
                email,
                password
            FROM users u
            WHERE u.email = '${email}'
            `
        );
        return result;
    } catch (err) {
        throw new BaseError("INVALID_DATA_INPUT", 500);
    }
};

const passwordCheck = async (email) => {
    try {
        return await database.query(
            `
        SELECT 
            password
        FROM users
        WHERE email = '${email}'
        `
        );
    } catch (err) {
        throw new BaseError("INVALID_DATA_INPUT", 500);
    }
};

const createUser = async (email, password, firstName, lastName) => {
    try {
        return await database.query(
            `
        INSERT INTO users(
            email,
            password,
            first_name,
            last_name
        ) VALUES ( ?, ?, ?, ? )
        `,
            [email, password, firstName, lastName]
        );
    } catch (err) {
        throw new BaseError("INVALID_DATA_INPUT", 500);
    }
};

module.exports = {
    userEmailCheck,
    createUser,
    passwordCheck,
    userLogin,
};
