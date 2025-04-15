module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭 Modify By 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭",
  description: "Display the bot's prefix and owner info",
  commandCategory: "Information",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body } = event;
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const prefix = threadSetting.PREFIX || global.config.PREFIX;

  const triggerWords = [
    "prefix", "mprefix", "mpre", "bot prefix", "what is the prefix", "bot name",
    "how to use bot", "bot not working", "bot is offline", "prefx", "prfix", 
    "perfix", "bot not talking", "where is bot", "bot dead", "bots dead",
    "dấu lệnh", "daulenh", "what prefix", "freefix", "what is bot", "what prefix bot",
    "how use bot", "where are the bots", "where prefix"
  ];

  let lowerBody = body.toLowerCase();
  if (triggerWords.includes(lowerBody)) {
    return api.sendMessage(
      `🌟━━━━━━━━━━━━━━━━━🌟
    𝐏𝐫𝐞𝐟𝐢𝐱 𝐈𝐧𝐟𝐨
🌟━━━━━━━━━━━━━━━━━🌟
➤ 𝗕𝗼𝘁 𝗡𝗮𝗺𝗲: 𝐒𝐮𝐤𝐡𝐢 𝐌𝐞𝐰
➤ 𝗣𝗿𝗲𝗳𝗶𝘅: [ ${prefix} ]
➤ 𝗢𝘄𝗻𝗲𝗿: 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦

➤ 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: www.facebook.com/100089047474463
➤ 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿: m.me/100089047474463
➤ 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: https://wa.me/01882333052

🌟━━━━━━━━━━━━━━━━━🌟
    𝗧𝗵𝗮𝗻𝗸 𝗬𝗼𝘂 𝗙𝗼𝗿 𝗨𝘀𝗶𝗻𝗴!
🌟━━━━━━━━━━━━━━━━━🌟`,
      threadID,
      messageID
    );
  }
};

module.exports.run = async({ event, api }) => {
  return api.sendMessage("Type 'prefix' or similar to get the bot info.", event.threadID);
};
