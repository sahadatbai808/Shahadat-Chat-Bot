const chalk = require("chalk");

function randomColor() {
  return "#00FF00"; // সবসময় সবুজ রঙ রিটার্ন করবে
}

module.exports = (_0x51663a, _0x3e23e6) => {
  switch (_0x3e23e6) {
    case "warn":
      console.log(chalk.bold.hex("#00FF00").bold("» Log « ") + _0x51663a);
      break;
    case "error":
      console.log(chalk.bold.hex("#00FF00").bold("» Log « ") + _0x51663a);
      break;
    default:
      console.log(chalk.bold.hex("#00FF00").bold(_0x3e23e6 + " » ") + _0x51663a);
      break;
  }
};

module.exports.loader = (_0x59d6bc, _0x3006ec) => {
  switch (_0x3006ec) {
    case "warn":
      console.log(chalk.bold.hex("#00FF00").bold(" CYBER ERROR•—»✨ ") + chalk.bold.hex("#00FF00").bold(_0x59d6bc));
      break;
    case "error":
      console.log(chalk.bold.hex("#00FF00").bold(" CYBER ERROR•—»✨ ") + _0x59d6bc);
      break;
    default:
      console.log(chalk.bold.hex("#00FF00").bold("CYBER•—»✨ ") + chalk.bold.hex("#00FF00").bold(_0x59d6bc));
      break;
  }
};
