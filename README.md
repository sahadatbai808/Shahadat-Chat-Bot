# 𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐂𝐡𝐚𝐭 𝐁𝐨𝐭 🔰

❖ A Messenger Multi-Device Bot To Take Your Messenger To Another Level! ❖

---

<p align="center">
  <img src='https://i.imgur.com/c6oAW6W.png'/>
</p>

---

## 🔥 About This Bot

**Shahadat Chat Bot** is a powerful and feature-rich bot for Messenger. It helps you automate tasks, manage chats, and quickly find various types of content.

### 🛠 Features Include:
- ✔️ Auto-reply  
- ✔️ Download stickers, videos, and images  
- ✔️ Search functionality  
- ✔️ Entertainment & Utility Commands  
- ✔️ Many more exciting features!

---

## 📌 Bot Information

- 🔹 **Owner:** Shahadat Islam 💫  
- 🔹 **Nickname:** Admin  
- 🔹 **Prefix:** `/`  
- 🔹 **Facebook ID:** [Click Here](https://www.facebook.com/100089047474463)  
- 🔹 **Messenger Contact:** [m.me/100089047474463](https://m.me/100089047474463)  
- 🔹 **WhatsApp Contact:** [01882333052](https://wa.me/8801882333052)

---

## ⚙️ DEPLOY WORKFLOWS

```yaml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [20.x]
        # See supported Node.js release schedule at https://nodejs.org/en/about/releases/

    steps:
    # Step to check out the repository code
    - uses: actions/checkout@v2

    # Step to set up the specified Node.js version
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v2
      with:
        node-version: ${{ matrix.node-version }}

    # Step to install dependencies
    - name: Install dependencies
      run: npm install

    # Step to run the bot with the correct port
    - name: Start the bot
      env:
        PORT: 8080
      run: npm start
