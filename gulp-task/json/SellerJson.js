import Json from './Json';

/**
 * Seller Json Class
 */
export default class SellerJson extends Json {
  /**
   * constructor
   * @param sellerList
   */
  constructor(sellerList) {
    super();
    this.sellerList = sellerList;
  }

  /**
   * output Seller Json to specified directory
   * @param distDir
   */
  output(distDir) {
    for (const seller of this.sellerList.list) {
      /* eslint no-console: 0 */
      console.log(`${distDir}${seller.id}.json`);
      this._outputJson(`${distDir}${seller.id}.json`, seller);
    }
  }
}
