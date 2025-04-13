module.exports.config = {
  name: "ruls",
  version: "1.0.0",
  permission: 0,
  credits: "Shahadat Islam",
  description: "Show group rules",
  prefix: true,
  category: "group",
  usages: "",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const rules = `
📌 গ্রুপের কিছু গুরুত্বপূর্ণ নিয়মাবলি:

1. ❌ অপ্রয়োজনীয় ট্যাগ করা যাবে না।
2. ❌ কোনো রকম গালি/অশ্লীল ভাষা ব্যবহার করা যাবে না।
3. ❌ ধর্ম/রাজনীতি নিয়ে বিতর্ক করা নিষেধ।
4. ❌ একসাথে অনেকবার মেসেজ (spam) পাঠানো যাবে না।
5. ❌ কারো ব্যক্তিগত তথ্য শেয়ার করা যাবে না।
6. ✅ সবাইকে সম্মান দেখাতে হবে।
7. ✅ অ্যাডমিনদের সিদ্ধান্ত মেনে চলতে হবে।
8. ✅ নতুন মেম্বারদের স্বাগত জানানো ভালো অভ্যাস।
9. ✅ কোনো সমস্যার সম্মুখীন হলে অ্যাডমিনদের জানান।

ধন্যবাদ সবাইকে! গ্রুপ সুন্দর রাখতে এগুলো মেনে চলুন।
  `;

  return api.sendMessage(rules, event.threadID);
};
