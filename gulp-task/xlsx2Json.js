import Parser from 'parse-xl';
import ProductList from './list/ProductList';
import SellerList from './list/SellerList';
import ProductJson from './json/ProductJson';
import SellerJson from './json/SellerJson';

const PRODUCT_MASTER_SHEET = 'product_master';
const SELLER_MASTER_SHEET = 'seller_master';

module.exports = {
  /**
   * import xlsx and output json files to specified directory
   * @param xlsx
   * @param dist
   */
  // TODO: remove ignore comment later
  /* eslint no-unused-vars: 1 */
  build: (xlsx, dist) => {
    const data = new Parser(xlsx);
    const productList = new ProductList(data.data[PRODUCT_MASTER_SHEET]);
    const sellerList = new SellerList(data.data[SELLER_MASTER_SHEET]);
    const productJson = new ProductJson(productList);
    const sellerJson = new SellerJson(sellerList);

    productJson.output('json/product/');
    sellerJson.output('json/seller/');
  }
};
