const djs = require('discord.js');

const client = new djs.Client({
    intents: [
        djs.GatewayIntentBits.Guilds,
        djs.GatewayIntentBits.GuildMessages,
        djs.GatewayIntentBits.MessageContent
    ],
    shards: 'auto',
    partials: [
        djs.Partials.Message,
        djs.Partials.Channel,
        djs.Partials.Guild,
    ],
});

module.exports = client;