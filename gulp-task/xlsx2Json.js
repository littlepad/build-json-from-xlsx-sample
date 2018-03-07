import Parser from 'parse-xl';
import ProductList from './list/ProductList';
import SellerList from './list/SellerList';
import ProductJson from './json/ProductJson';
import SellerJson from './json/SellerJson';

const PRODUCT_SHEET = 'product';
const SELLER_SHEET = 'seller';

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
    const productList = new ProductList(data.data[PRODUCT_SHEET]);
    const sellerList = new SellerList(data.data[SELLER_SHEET]);
    const productJson = new ProductJson(productList);
    const sellerJson = new SellerJson(sellerList);

    productJson.output('json/product/');
    sellerJson.output('json/seller/');

    /* eslint no-console: 0 */
    console.log(productList);
    console.log(sellerList);
  }
};
