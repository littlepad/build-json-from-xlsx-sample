import fs from 'fs';

/**
 * Json class
 */
export default class Json {
  /**
   * constructor
   */
  constructor() {
  }

  /**
   * output json file to specified directory
   */
  output() {
  }

  /**
   * output json file
   * @param jsonFilePath
   * @param dataObject
   * @private
   */
  _outputJson(jsonFilePath, dataObject) {
    /* eslint no-console: 0 */
    console.log(jsonFilePath);
    const json = JSON.stringify(dataObject, null, '	');
    fs.writeFile(jsonFilePath, json, (err) => {
      if(err) console.log(err);
    });
  }
}
