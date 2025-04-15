module.exports.config = {
  name: "mentioninfo",
  version: "1.0.0",
  hasPermission: 0,
  credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
  description: "Sends a message when 'Shahadat Islam' is mentioned",
  commandCategory: "auto",
  usages: "",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ event, api }) {
  const text = event.body?.toLowerCase() || "";
  const mentions = Object.keys(event.mentions || {});

  // Check if the message mentions "shahadat islam"
  if (mentions.length > 0 && text.includes("shahadat islam")) {
    const message =
      "──── Boss Shahadat Info ───\n" +
      "𖠌 Name        : 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦\n" +
      "𖠌 Age         : 18+\n" +
      "𖠌 Gender      : Male\n" +
      "𖠌 Education   : HSC 2026\n" +
      "𖠌 Profession  : Student\n" +
      "𖠌 Relationship: Single\n" +
      "𖠌 Address     : Khagrachori\n" +
      "────── 𝐒𝐮𝐤𝐡𝐢 𝐌𝐞𝐰 ──────";

    return api.sendMessage(message, event.threadID, event.messageID);
  }
};

module.exports.run = () => {};
