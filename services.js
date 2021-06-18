const axios = require('axios');

function getDadJoke() {
    const url = 'https://official-joke-api.appspot.com/random_joke';
    const response = axios.get(url);
    return response;
}

function getInsult() {
    const url = 'https://insult.mattbas.org/api/insult.json';
    const response = axios.get(url);
    return response;
}

module.exports = {
    getDadJoke,
    getInsult
}