require('dotenv').config();
const Discord = require('discord.js');
const { getDadJoke } = require('./jokes');
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
});