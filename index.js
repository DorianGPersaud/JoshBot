const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('.config.json');

let movieTime = '8pm'

client.once('ready', () => {
    console.log('JoshBot is online!');
});

client.on('message', message => {
    
    const lowerMessage = message.content.toLowerCase();
    
    if (message.author.bot) {
        return;
    }
    
    if (lowerMessage.startsWith('movie time: ')) {
        movieTime = message.content.slice(12);
        return;
    }

    if (
      lowerMessage.includes("movie") &&
      lowerMessage.includes("?") &&
      (lowerMessage.includes("time") || lowerMessage.includes("when"))
    ) {
      message.channel.send(`The time of the movie is ${movieTime}.`);
    }

});

client.login(config.token);