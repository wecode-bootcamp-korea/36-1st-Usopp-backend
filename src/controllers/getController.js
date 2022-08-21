const getService = require("../services/getService");

const getMain = async (req, res) => {
  try {
    const Main = await getService.getMain();
    res.status(200).json(Main);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getMain
};