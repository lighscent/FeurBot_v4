const djs = require('discord.js');
const log = require('../logger');


module.exports = {
    name: djs.Events.MessageCreate,
    async execute(message) {
        if (message.author.bot) return;
        if (!message.guild) return;

        // vérifie si la phrase finie par quoi
        if (message.content.endsWith('quoi' || 'qwa' )) {
            message.reply('feur');
        }
    }
}