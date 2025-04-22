const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.1',
    hasPermssion: 0,
    credits: 'Shahadat Islam',
    description: 'Automatically sends messages at scheduled times (BD Time)',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: 'Now it\'s time 12:00 AM ⏳ অনেক রাত হলো, ঘুমিয়ে পড় Bby Good Night 😴💤❤️' },
    { time: '1:00 AM', message: 'Now it\'s time 1:00 AM ⏳ কিরে তুই এখনো ঘুমাস নাই? তাড়াতাড়ি ঘুমিয়ে পড়!😾😴🛌' },
    { time: '2:00 AM', message: 'Now it\'s time 2:00 AM ⏳ ঘুমে আয় ভাই! এখনো জাইগা আফসোস ক্যান?😤👊💤' },
    { time: '3:00 AM', message: 'Now it\'s time 3:00 AM ⏳ সবাই ঘুমাইয়া গেছে, তুই এখন জাইগা আসোস ক্যান?🙄🌃🛌' },
    { time: '4:00 AM', message: 'Now it\'s time 4:00 AM ⏳ একটু পর আজান হবে, সময় হয়ে গেছে। 🕌🕋🕓' },
    { time: '5:00 AM', message: 'Now it\'s time 5:00 AM ⏳ ফজরের আজান হয়ে গেছে, নামাজটা পরে নিও পিও~ 🕌✨🤲💖' },
    { time: '6:00 AM', message: 'Now it\'s time 6:00 AM ⏳ আসসালামুয়ালাইকুম Good Morning Bby! এতো সকালে ঘুম থেকে উঠে পড়ছ? 🌅💖😳' },
    { time: '7:00 AM', message: 'Now it\'s time 7:00 AM ⏳ ঘুম ভাঙতেই মোবাইল! দাঁত ব্রাশটা করবি তো নাকি!🛌➡️📱' },
    { time: '8:00 AM', message: 'Now it\'s time 8:00 AM ⏳ পিও, মোবাইল রেখে দাঁত ব্রাশ করে খেয়ে নাও!📱🪥🍽️' },
    { time: '9:00 AM', message: 'Now it\'s time 9:00 AM ⏳ Bby, Breakfast korco?🍳🥞💖' },
    { time: '10:00 AM', message: 'Now it\'s time 10:00 AM ⏳ কিরে ভন্ড, তুই আজ কলেজ যাস নাই? 😜📚🙄' },
    { time: '11:00 AM', message: 'Now it\'s time 11:00 AM ⏳ নাটক কম কর পিও~ বস এখন বিজি আছে!🙄📱💼' },
    { time: '12:00 PM', message: 'Now it\'s time 12:00 PM ⏳ Good Afternoon! 🌞🙌🌸' },
    { time: '1:00 PM', message: 'Now it\'s time 1:00 PM ⏳ hj' },
    { time: '2:00 PM', message: 'Now it\'s time 2:00 PM ⏳ ভন্ড কোথাকার, মোবাইল রাখ! গোসল করে খাওয়া-দাওয়া করে নে🔪🛁🍽️' },
    { time: '3:00 PM', message: 'Now it\'s time 3:00 PM ⏳ Jan, তোমাকে ছাড়া আর দুপুরে ঘুম হয় না….!😴💔🌙' },
    { time: '4:00 PM', message: 'Now it\'s time 4:00 PM ⏳ অনেক গরম পড়ছে আজ! 🥵🌞💦' },
    { time: '5:00 PM', message: 'Now it\'s time 5:00 PM ⏳ পরিস্থিতি যেমনি হোক না কেন, সময় হলে হাসতেই হবে! 😅🕒🙂' },
    { time: '6:00 PM', message: 'Now it\'s time 6:00 PM ⏳ Good Evening Everyone! সবাই হাত মুখ ধুয়ে নাও! 🌆👐💦' },
    { time: '7:00 PM', message: 'Now it\'s time 7:00 PM ⏳ কিরে ভন্ড, তুই আজ পড়তে বসছিলি নাকি?😏📚🤔' },
    { time: '8:00 PM', message: 'Now it\'s time 8:00 PM ⏳ ওই ওই, এতো bot bot না করে আমার বস শাহাদাৎ কে একটা গফ দে...!🫰😎🔥' },
    { time: '9:00 PM', message: 'Now it\'s time 9:00 PM ⏳ আমার cute bby টাহ খানা খাইছে...!😘🍽️❤️' },
    { time: '10:00 PM', message: 'Now it\'s time 10:00 PM ⏳ কিরে ভন্ড, খাইবি কখন? সারাদিন মোবাইল টিপস..!😜📱😾' },
    { time: '11:00 PM', message: 'Now it\'s time 11:00 PM ⏳ যে ছেড়ে গেছে 😔 তাকে ভুলে যাও 🙂 আমার বস শাহাদাৎ এর সাথে প্রেম করে তাকে দেখিয়ে দাও...!🙈🐸🤗' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ AUTOSENT COMMAND LOADED (BD TIME) ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const rule = new schedule.RecurrenceRule();
        rule.tz = 'Asia/Dhaka';
        rule.hour = hour24;
        rule.minute = parseInt(minute, 10);

        schedule.scheduleJob(rule, () => {
            if (!global.data?.allThreadID) return;
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });

        console.log(chalk.hex("#00FFFF")(`Scheduled (BDT): ${time} => ${message}`));
    });
};

module.exports.run = () => {
    // Main logic is in onLoad
};
