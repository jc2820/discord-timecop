module.exports = {
    name: 'tenMins',
    execute(msg) {
      setTimeout(() => {
        msg.reply('TEN MINUTES ARE UP SCUM!');
      }, 600000);
    },
};