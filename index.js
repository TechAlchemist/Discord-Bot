require('dotenv').config();
const Discord = require('discord.js');
const { getDadJoke, getInsult } = require('./services');
const bot = new Discord.Client();

const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}.`)
});

bot.on('message', msg => {
    if (msg.content === '$joke') {           
        getDadJoke().then(joke => {  
            msg.channel.send(joke.data.setup + '\n' + joke.data.punchline); 
        });
    }
    else if (msg.content === '$insult') {           
        getInsult().then(insult => {  
            msg.channel.send(insult.data.insult); 
        });
    }
    else if (msg.content === '$haha') {
        msg.channel.send('Yeah, you like that joke do ya? Little creep...');
    }
});