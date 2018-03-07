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
    const json = JSON.stringify(dataObject, null, '	');
    fs.writeFile(jsonFilePath, json);
  }
}
