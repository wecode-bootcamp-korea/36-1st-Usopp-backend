const { database } = require('./dataSource');

const productAllList = async () => {
    try {
        return await database.query(
        `SELECT  
        c.id AS cid,
        c.name as cname,
        c.category_description,
        (SELECT
                    JSON_ARRAYAGG(JSON_OBJECT(
                      "name", p.name,
                      "id", p.id,
                      "cid", c.id,
                      "price", p.price,
                      "type", p.type,
                      "ingredient", p.ingredient, 
                      "url", pi.url
                      )) JSON  FROM products p
                  INNER JOIN products_images pi ON p.product_image_id = pi.id
                  WHERE p.category_id = c.id
                )  product,
        (SELECT
                    JSON_ARRAYAGG(JSON_OBJECT(
                      "name", pg.name,
                      "id", pg.id,
                      "cid", c.id,
                      "price", pg.price,
                      "type", pg.description,
                      "ingredient", pg.components,
                      "url", pi.url
                      )) JSON  FROM products_groups pg
                  INNER JOIN products_images pi ON pg.product_group_image_id = pi.id
                  WHERE pg.category_id = c.id
                ) setProduct
        from category c
          `
      );
    } catch (err) {
        throw new BaseError("MAIN_DOES_NOT_EXIST", 500);
    }
  };

  const productCategoryList = async (categoryId) => {
    try { 
      return await database.query(
        `SELECT  
        c.id AS cid,
        c.category_description,
        (SELECT
                    JSON_ARRAYAGG(JSON_OBJECT(
                      "name", p.name,
                      "id", p.id,
                      "cid", c.id,
                      "price", p.price,
                      "type", p.type,
                      "ingredient", p.ingredient, 
                      "url", pi.url
                      )) JSON  FROM products p
                  INNER JOIN products_images pi ON p.product_image_id = pi.id
                  WHERE p.category_id = ${categoryId} 
                )  product,
        (SELECT
                    JSON_ARRAYAGG(JSON_OBJECT(
                      "name", pg.name,
                      "id", pg.id,
                      "cid", c.id,
                      "price", pg.price,
                      "type", pg.description,
                      "ingredient", pg.components,
                      "url", pi.url
                      )) JSON  FROM products_groups pg
                  INNER JOIN products_images pi ON pg.product_group_image_id = pi.id
                  WHERE pg.category_id = ${categoryId} 
                ) setProduct
        from category c
        WHERE c.id = ${categoryId};
          `
      );
    } catch (err) {
        throw new BaseError("MAIN_DOES_NOT_EXIST", 500);
    }
  };

  const productAromaList = async (aromasId) => {
    try { 
      return await database.query(
        `SELECT  
        aromas.aroma_title,
        aromas.id as aid,
        aromas.aroma_description,
        (SELECT
                    JSON_ARRAYAGG(JSON_OBJECT(
                      "name", p.name,
                      "id", p.id,
                      "aid", aromas.id,
                      "price", p.price,
                      "type", p.type,
                      "ingredient", p.ingredient, 
                      "url", pi.url
                      )) JSON  FROM products p
                  INNER JOIN products_images pi ON p.product_image_id = pi.id
                  INNER JOIN products_aromas pa ON p.id = pa.product_id
                  WHERE pa.aroma_id = ${aromasId} 
                )  product  
                from aromas
                WHERE aromas.id = ${aromasId};        
          `
      );
    } catch (err) {
        throw new BaseError("MAIN_DOES_NOT_EXIST", 500);
    }
  };

  const productDetailPage = async (productId) => {
    try {
      return await database.query(
        `SELECT
        p.id,
        p.name,
        p.price,
        p.type,
        c.name as cname,
        c.id,
        p.description,
        p.ingredient,
        p.detailed_ingredient,
        pi.url,
        (SELECT
           JSON_ARRAYAGG(
           a.name
            ) JSON FROM aromas a
            INNER JOIN products_aromas pa ON pa.aroma_id = a.id
            INNER JOIN products p ON p.id = pa.product_id
            WHERE p.id = ${productId}
            ) aromas
        FROM products p
        INNER JOIN products_images pi ON p.product_image_id = pi.id
        INNER JOIN category c ON p.category_id = c.id
        WHERE c.id = p.category_id AND p.id = ${productId};
        `
      );
    } catch (err) {
    throw new BaseError("MAIN_DOES_NOT_EXIST", 500);
    }
  };

  module.exports = { 
    productAllList,
    productCategoryList,
    productAromaList,
    productDetailPage
  };