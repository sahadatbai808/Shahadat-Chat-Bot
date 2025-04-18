const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
    description: 'Automatically sends scheduled messages in groups',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: 'অনেক রাত হলো, ঘুমিয়ে পড় Bby Good Night 😴💤❤️' },
    { time: '01:00 AM', message: 'কিরে তুই এখনো ঘুমাস নাই? তাড়াতাড়ি ঘুমিয়ে পড়!😾😴🛌' },
    { time: '02:00 AM', message: 'ঘুমে আয় ভাই! এখনো জাইগা আফসোস ক্যান?😤👊💤' },
    { time: '03:00 AM', message: 'সবাই ঘুমাইয়া গেছে, তুই এখন জাইগা আসোস ক্যান?🙄🌃🛌' },
    { time: '04:00 AM', message: 'একটু পর আজান হবে, সময় হয়ে গেছে। 🕌🕋🕓' },
    { time: '05:00 AM', message: 'ফজরের আজান হয়ে গেছে, নামাজটা পরে নিও পিও~ 🕌✨🤲💖' },
    { time: '06:00 AM', message: 'আসসালামুয়ালাইকুম Good Morning Bby! এতো সকালে ঘুম থেকে উঠে পড়ছ? 🌅💖😳' },
    { time: '07:00 AM', message: 'ঘুম ভাঙতেই মোবাইল! দাঁত ব্রাশটা করবি তো নাকি!🛌➡️📱' },
    { time: '08:00 AM', message: 'পিও, মোবাইল রেখে দাঁত ব্রাশ করে খেয়ে নাও!📱🪥🍽️' },
    { time: '09:00 AM', message: 'Bby, Breakfast korco?🍳🥞💖' },
    { time: '10:00 AM', message: 'কিরে ভন্ড, তুই আজ কলেজ যাস নাই? 😜📚🙄' },
    { time: '11:00 AM', message: 'নাটক কম কর পিও~ বস এখন বিজি আছে!🙄📱💼' },
    { time: '12:00 PM', message: 'Good Afternoon! 🌞🙌🌸' },
    { time: '01:00 PM', message: 'ভন্ড কোথাকার, মোবাইল রাখ! গোসল করে খাওয়া-দাওয়া করে নে🔪🛁🍽️' },
    { time: '02:00 PM', message: 'Jan, তোমাকে ছাড়া আর দুপুরে ঘুম হয় না….!😴💔🌙' },
    { time: '03:00 PM', message: 'অনেক গরম পড়ছে আজ! 🥵🌞💦' },
    { time: '04:00 PM', message: 'পরিস্থিতি যেমনি হোক না কেন, সব সময় হাসতেই হবে! 😅🕒🙂' },
    { time: '05:00 PM', message: 'Good Evening Everyone! সবাই হাত মুখ ধুয়ে নাও! 🌆👐💦' },
    { time: '06:00 PM', message: 'কিরে ভন্ড, তুই আজ পড়তে বসছিলি নাকি?😏📚🤔' },
    { time: '07:00 PM', message: 'আমার cute bby টাহ খানা খাইছে...!😘🍽️❤️' },
    { time: '08:00 PM', message: 'ওই ওই, এতো bot bot না করে আমার বস শাহাদাৎ কে একটা গফ দে...!🫰😎🔥' },
    { time: '09:00 PM', message: 'কিরে ভন্ড, খাইবি কখন? সারাদিন মোবাইল টিপস..!😜📱😾' },
    { time: '10:00 PM', message: 'যে ছেড়ে গেছে 😔 তাকে ভুলে যাও 🙂 আমার বস শাহাদাৎ এর সাথে প্রেম করে তাকে দেখিয়ে দাও...!🙈🐸🤗' },
    { time: '11:00 PM', message: 'নাটক কম কর পিও~ বস এখন বিজি আছে!🙄📱💼' }
];

const createMessageBox = (time, message) => {
    return `═════════════════════\n` +
           `\t𝐍𝐨𝐰 𝐢𝐭𝐬 𝐭𝐢𝐦𝐞 ${time} ⏳\n\n` +
           `${message}\n` +
           `═════════════════════\n` +
           `\t⫷ 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫: 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 ⫸\n` +
           `═════════════════════`;
};

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [rawHour, minutePeriod] = time.split(":");
        const [minute, period] = minutePeriod.split(" ");
        let hour = parseInt(rawHour, 10);
        const minuteNum = parseInt(minute, 10);

        // Convert to 24-hour format
        if (period === 'AM' && hour === 12) hour = 0;
        if (period === 'PM' && hour !== 12) hour += 12;

        // Schedule the message
        schedule.scheduleJob({ hour, minute: minuteNum, tz: "Asia/Dhaka" }, () => {
            const fullMessage = createMessageBox(time, message);
            api.getThreadList(25, null, ["INBOX"], (err, list) => {
                if (err) return console.error("Thread list error:", err);
                list.forEach(thread => {
                    api.sendMessage(fullMessage, thread.threadID);
                });
            });
        });
    });
};
