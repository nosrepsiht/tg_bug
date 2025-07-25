    // ❗️ запустите с помощью node server.js
    // для хостинга был использован ngrok

    const express = require('express');
    const TelegramBot = require('node-telegram-bot-api');
    const cors = require('cors');
    const path = require('path');

    const token = 'your_token'; // ❗️ Замените на ваш токен
    const webAppUrl = 'your_web_url'; // ❗️ Замените на ваш URL

    const bot = new TelegramBot(token, { polling: true });
    const app = express();

    app.use(express.json());
    app.use(cors());
    app.use(express.static(path.join(__dirname, '../frontend')));

    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        const inlineKeyboard = {
            reply_markup: {
                inline_keyboard: [
                    [{
                        text: 'Открыть сайт',
                        web_app: { url: webAppUrl }
                    }]
                ]
            }
        }
        
        bot.sendMessage(chatId, 'Сайт', inlineKeyboard);
    });

    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });