const getDao = require("../models/getDao");

const getMain = async () => {
  const selectGet = await getDao.getMain();
  return selectGet;
};

module.exports = {
  getMain
};