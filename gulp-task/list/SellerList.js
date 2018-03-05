import Seller from './../data/Seller';

/**
 * SellerList Class
 */
export default class SellerList {
  /**
   * constructor
   * @param dataList
   */
  constructor(dataList) {
    this.sellerList = this._createSellerList(dataList);
  }

  /**
   * create seller list
   * @param dataList
   * @returns sellerList {Array}
   */
  _createSellerList(dataList) {
    let sellerList = [];

    if(!dataList) return sellerList;

    dataList.map((data) => {
      const seller = new Seller(
        data.id,
        data.name,
        data.tel
      );
      sellerList.push(seller);
    });

    return sellerList;
  }

  /**
   * get seller by id
   * @param id
   * @returns {*}
   */
  getSellerById(id) {
    for (const seller of this.sellerList) {
      if (id === seller.id) return seller;
    }
    return false;
  }

  /**
   * return seller list
   * @returns SellerList {Array}
   */
  get list() {
    return this.sellerList;
  }
}
