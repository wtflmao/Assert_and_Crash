const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {

        if (interaction.isChatInputCommand()) {

            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.execute(interaction);
                console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
            } catch (error) {
                console.error(`Error executing ${interaction.commandName}`);
                console.error(error);
            }

        } else if (interaction.isAutocomplete()) {

            const command = interaction.client.commands.get(interaction.commandName);

            if (!command) {
                console.error(`No command matching ${interaction.commandName} was found.`);
                return;
            }

            try {
                await command.autocomplete(interaction);
            } catch (error) {
                console.error(error);
            }

        } else if (interaction.isButton()) {
            console.log("a button!");
        } else if (interaction.isSelectMenu()) {
            console.log("a select menu!");
        } else if (interaction.isModalSubmit()) {
            console.log("a modal!");
        } else {
            // not a command
        }
    },
};