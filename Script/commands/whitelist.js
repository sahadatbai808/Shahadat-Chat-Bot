const fs = require("fs");
const configPath = "./cyber.json"; // Mirai Bot-এর config ফাইলের পথ
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

module.exports.config = {
    name: "whitelist",
    version: "1.0",
    hasPermission: 2,
    credits: "Modified for Mirai Bot",
    description: "Manage bot whitelist users",
    commandCategory: "admin",
    usages: "[add/remove/list/on/off] <uid>",
    cooldowns: 5
};

module.exports.run = async ({ event, args, api }) => {
    if (!config.whitelist) {
        config.whitelist = { enabled: false, users: [] };
    }

    switch (args[0]) {
        case "add": {
            if (!args[1]) return api.sendMessage("⚠ অনুগ্রহ করে ইউজার আইডি প্রদান করুন!", event.threadID);
            const uid = args[1];
            if (config.whitelist.users.includes(uid)) {
                return api.sendMessage("⚠ এই ইউজার ইতোমধ্যে whitelist-এ আছে!", event.threadID);
            }
            config.whitelist.users.push(uid);
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
            return api.sendMessage(`✅ ইউজার ${uid} কে whitelist-এ যোগ করা হয়েছে!`, event.threadID);
        }

        case "remove": {
            if (!args[1]) return api.sendMessage("⚠ অনুগ্রহ করে ইউজার আইডি প্রদান করুন!", event.threadID);
            const uid = args[1];
            config.whitelist.users = config.whitelist.users.filter(id => id !== uid);
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
            return api.sendMessage(`✅ ইউজার ${uid} কে whitelist থেকে সরানো হয়েছে!`, event.threadID);
        }

        case "list": {
            if (config.whitelist.users.length === 0) return api.sendMessage("⚠ কোনো ইউজার whitelist-এ নেই!", event.threadID);
            return api.sendMessage("👑 Whitelist ইউজার তালিকা:\n" + config.whitelist.users.join("\n"), event.threadID);
        }

        case "on": {
            config.whitelist.enabled = true;
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
            return api.sendMessage("✅ Whitelist মোড চালু করা হয়েছে!", event.threadID);
        }

        case "off": {
            config.whitelist.enabled = false;
            fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
            return api.sendMessage("✅ Whitelist মোড বন্ধ করা হয়েছে!", event.threadID);
        }

        default:
            return api.sendMessage("⚠ সঠিক ফরম্যাট ব্যবহার করুন: add/remove/list/on/off", event.threadID);
    }
};
