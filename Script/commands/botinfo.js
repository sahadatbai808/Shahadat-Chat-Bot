const fs = require("fs-extra");
const axios = require("axios");
const request = require("request");
const moment = require("moment-timezone");

module.exports.config = {
  name: "botinfo",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Shahadat Islam",
  description: "Bot info.",
  commandCategory: "system",
  cooldowns: 1,
  dependencies: {
    request: "",
    "fs-extra": "",
    axios: ""
  }
};

module.exports.run = async function ({ api, event }) {
  const timeNow = moment.tz("Asia/Dhaka").format("D/MM/YYYY »» HH:mm:ss");
  const uptime = process.uptime();
  const hours = Math.floor(uptime / (60 * 60));
  const minutes = Math.floor((uptime % (60 * 60)) / 60);
  const seconds = Math.floor(uptime % 60);

  const prefix = global.config.PREFIX || "!";
  const botName = global.config.BOTNAME || "BOT";

  const msg = 
`╭──────•◈•───────╮
   ⚡𝘽𝙊𝙏 𝙄𝙎 𝙍𝙐𝙉𝙉𝙄𝙉𝙂⚡  
╰──────•◈•───────╯

☄️𝘽𝙊𝙏𝙉𝘼𝙈𝙀☄️ »» ${botName}
🕧 𝙐𝙋𝙏𝙄𝙈𝙀 »» ${hours}h ${minutes}m ${seconds}s
🌸𝙋𝙍𝙀𝙁𝙄𝙓🌸 »» ${prefix}

🧑‍💻 𝘽𝙊𝙏 𝙊𝙒𝙉𝙀𝙍 »» Shahadat Islam
📅 𝑫𝑨𝑻𝑬 𝑨𝑵𝑫 𝑻𝑰𝑴𝑬 »» ${timeNow}
`;

  const imgURL = "https://i.imgur.com/iHBU2pz.mp4"; // Replace with your own image if needed
  const path = __dirname + "/cache/botinfo.jpg";
  const imgData = (await axios.get(imgURL, { responseType: "stream" })).data;

  imgData.pipe(fs.createWriteStream(path)).on("close", () => {
    api.sendMessage(
      {
        body: msg,
        attachment: fs.createReadStream(path)
      },
      event.threadID,
      () => fs.unlinkSync(path)
    );
  });
};