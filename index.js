require('dotenv').config();
const Discord = require('discord.js');

const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', (msg) => {
  const {content} = msg;  
  let command;
    if (content.includes('1 min') || content.includes('one min')  || content.includes('one minute') || content.includes('1 minute') || content.includes('60 secs')) {
      command = 'oneMin';
    } else if (content.includes('2 mins') || content.includes('two mins')  || content.includes('two minutes') || content.includes('2 minutes')) {
      command = 'fiveMins';
    } else if (content.includes('5 mins') || content.includes('five mins')  || content.includes('five minutes') || content.includes('5 minutes')) {
      command = 'fiveMins';
    } else if (content.includes('10 mins') || content.includes('ten mins')  || content.includes('ten minutes') || content.includes('10 minutes')) {
      command = 'tenMins';
    } else return;

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg);
    console.log(`${command} warning issued!`);
  } catch (error) {
    console.error(error);
  }
});
