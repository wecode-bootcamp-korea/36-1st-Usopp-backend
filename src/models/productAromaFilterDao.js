const BaseError = require("../middlewares/baseError");
const database = require("./datasource");

const productAromaFilter = async (aromaId) => {
    try {
        return await database.query(
            `
        SELECT 
        p.name, 
        p.price, 
        p.size, 
        p.ingredient, 
        p.type, 
        pi.url image, 
        a.name aroma 
    FROM products p 
    INNER JOIN products_aromas pa ON pa.product_id = p.id
    INNER JOIN aromas a ON a.id = pa.aroma_id
    INNER JOIN products_images pi ON pi.id = p.product_image_id
    WHERE a.id = '${aromaId}'
        `
        );
    } catch (err) {
        throw new BaseError("INVALID_NOT_INPUT", 500);
    }
};

module.exports = {
    productAromaFilter,
};
