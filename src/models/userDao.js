const database = require("./dataSource");

const userEmailCheck = async (email) => {
    return await database.query(
        `
        SELECT EXISTS(
            SELECT 
                email 
            FROM users 
            WHERE email = '${email}')
        `
    );
};

const passwordCheck = async (email) => {
    return await database.query(
        `
        SELECT 
            password
        FROM users
        WHERE email = '${email}'
        `
    );
};

const createUser = async (email, password, firstName, lastName) => {
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
};

module.exports = {
    userEmailCheck,
    createUser,
    passwordCheck
};
