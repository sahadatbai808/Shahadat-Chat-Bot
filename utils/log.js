const chalk = require("chalk");
function randomColor() {
  var _0x5655ed = '';
  for (var _0x5644d1 = 0; _0x5644d1 < 3; _0x5644d1++) {
    var _0x4a9030 = Math.floor(Math.random() * 256).toString(16);
    _0x5655ed += _0x4a9030.length == 1 ? '0' + _0x4a9030 : _0x4a9030;
  }
  return '#' + _0x5655ed;
}
;
module.exports = (_0x51663a, _0x3e23e6) => {
  switch (_0x3e23e6) {
    case "warn":
      console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + _0x51663a);
      break;
    case "error":
      console.log(chalk.bold.hex("#ff0000").bold("» Log « ") + _0x51663a);
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold(_0x3e23e6 + " » ") + _0x51663a);
      break;
  }
};
module.exports.loader = (_0x59d6bc, _0x3006ec) => {
  switch (_0x3006ec) {
    case "warn":
      console.log(chalk.bold.hex(randomColor()).bold(" ULLASH LOADED•—» ") + chalk.bold.hex("#8B8878").bold(_0x59d6bc) + chalk.bold.hex("FF00DD")(''));
      break;
    case "error":
      console.log(chalk.bold.hex(randomColor()).bold(" ULLASH LOADED•—» ") + _0x59d6bc + chalk.bold.hex("5EFF00")(''));
      break;
    default:
      console.log(chalk.bold.hex(randomColor()).bold("ULLASH•—» ") + chalk.bold.hex(randomColor()).bold(_0x59d6bc) + chalk.bold.hex("FFF0000")(''));
      break;
  }
};
