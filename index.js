require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
  });

bot.on('message', msg => {
    if (msg.content.includes('5 mins')) {
      setTimeout(() => {
        msg.reply('5 MINS IS UP SCUM');
      }, 300000);       
    }
});