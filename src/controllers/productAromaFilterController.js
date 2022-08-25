const productAromaFilterService = require("../services/productAromaFilterService");
const BaseError = require("../middlewares/baseError");

const productAromaFilter = async (req, res) => {
    const { aromaId } = req.params;

    if (!aromaId) throw new BaseError("KEY_ERROR", 400);

    const productAroma = await productAromaFilterService.productAroma(aromaId);

    res.status(200).json({ product: productAroma });
};

module.exports = {
    productAromaFilter,
};
