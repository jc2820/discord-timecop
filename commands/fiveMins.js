module.exports = {
    name: 'fiveMins',
    execute(msg) {
      setTimeout(() => {
        msg.reply('5 MINS IS UP SCUM');
      }, 300000); 
    },
};