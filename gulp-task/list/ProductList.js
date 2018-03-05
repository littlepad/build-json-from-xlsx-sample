import Product from './../data/Product';

/**
 * ProductList Class
 */
export default class ProductList {
  /**
   * constructor
   * @param dataList
   */
  constructor(dataList) {
    this.productList = this._createProductList(dataList);
  }

  /**
   * create product list
   * @param dataList
   * @returns productList {Array}
   */
  _createProductList(dataList) {
    let productList = [];

    if(!dataList) return productList;

    dataList.map((data) => {
      const product = new Product(
        data.id,
        data.name,
        data.price
      );
      productList.push(product);
    });

    return productList;
  }

  /**
   * get product by id
   * @param id
   * @returns {*}
   */
  getProductById(id) {
    for (const product of this.productList) {
      if (id === product.id) return product;
    }
    return false;
  }

  /**
   * return product list
   * @returns ProductList {Array}
   */
  get list() {
    return this.productList;
  }
}
