module.exports = {
    name: 'twoMins',
    execute(msg) {
      setTimeout(() => {
        msg.reply('TWO MINUTES ARE UP SCUM!');
      }, 120000);  
    },
};