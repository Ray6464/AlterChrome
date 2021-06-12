var chalk = require('chalk');
var hardlog = require('hardlog');

const libraryInfo = {
  version: () => "0.0.2",
  authors: () => "Ray Voice and Anna Voice",
  logFile: () => "alterchrome-hardlogs.txt",
}

hardlog.init(libraryInfo.authors(),
             libraryInfo.version(),
             libraryInfo.logFile());

let alterChrome = false;
let primaryColor = "black";
let secondaryColor = "blue";

const bgFy = (colorName) => "bg" + colorName.charAt(0).toUpperCase() + colorName.slice(1);

hardlog.write(chalk.bgBlue.black("kale"));

module.exports = {
  color: function(tagName) {
    alterChrome = !alterChrome;
    if (alterChrome) {
      return chalk[bgFy(primaryColor)][secondaryColor].bold(tagName);
    } else {
      return chalk[bgFy(secondaryColor)][primaryColor](tagName);
    }
  },
  setPrimaryColor: function(colorName){
    primaryColor = colorName; 
  },
  setSecondaryColor: function(colorName){
    secondaryColor = colorName;
  }
}

