const { database } = require('./dataDao');

const getMain = async () => {
    try {
      return await database.query(
        `SELECT  
              p.name,
              p.size, 
              pi.url,
              p.price
          FROM products p
          INNER JOIN products_images pi ON p.product_image_id = pi.id
          WHERE name LIKE '%퍼퓸' 

          UNION
          
          SELECT  
              pg.name,
              pg.size,
              pi.url,
              pg.price
          FROM products_groups pg
          INNER JOIN products_images pi ON pg.product_group_image_id = pi.id
          `
      );
    } catch (err) {
      const error = new Error("MAIN_DOES_NOT_EXIST");
      error.statusCode = 404;
      throw error;
    }
  };

  module.exports = { 
    getMain
  };
  