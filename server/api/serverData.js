"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function readDataFile(){return(0,_fileUtilsJs.readJson)(_path2["default"].join((0,_fileUtilsJs.getCurrentWorkingDirPath)(),dataFilePath))}function writeDataFile(e){return new Promise(function(t,a){try{return(0,_fileUtilsJs.writeJson)(_path2["default"].join((0,_fileUtilsJs.getCurrentWorkingDirPath)(),dataFilePath),e)}catch(i){a("Error: "+i.message)}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.readDataFile=readDataFile,exports.writeDataFile=writeDataFile;var _path=require("path"),_path2=_interopRequireDefault(_path),_fileUtilsJs=require("./fileUtils.js"),dataFilePath="data/sample-data.json";