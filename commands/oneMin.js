module.exports = {
    name: 'oneMin',
    execute(msg) {
      setTimeout(() => {
        msg.reply('ONE MINUTE IS UP SCUM!');
      }, 60000); 
    },
};