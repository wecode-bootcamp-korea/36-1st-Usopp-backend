const productAromaFilterDao = require("../models/productAromaFilterDao");

const productAroma = async ( aromaId ) => {
    return await productAromaFilterDao.productAromaFilter(aromaId)
}

module.exports = {
    productAroma
}