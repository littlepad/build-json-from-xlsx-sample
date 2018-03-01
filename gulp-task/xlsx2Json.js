const Parser = require('parse-xl');

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

    /* eslint no-console: 0 */
    console.log(data.data);
  }
};
