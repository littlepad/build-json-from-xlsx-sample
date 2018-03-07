import Json from './Json';

/**
 * Product Json Class
 */
export default class ProductJson extends Json {
  /**
   * constructor
   * @param productList
   */
  constructor(productList) {
    super();
    this.productList = productList;
  }

  /**
   * output Product Json to specified directory
   * @param distDir
   */
  output(distDir) {
    for (const product of this.productList.list) {
      this._outputJson(`${distDir}${product.id}.json`, product);
    }
  }
}
