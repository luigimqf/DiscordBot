const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("skipto").setDescription("Muda para uma track ai")
    .addNumberOption((option) => 
        option.setName("tracknumber").setDescription("A musica foi para").setMinValue(1).setRequired(true)),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Não tem musica")

        const trackNum = interaction.options.getNumber("tracknumber")
        if (trackNum > queue.tracks.length)
            return await interaction.editReply("Invalido")
		queue.skipTo(trackNum - 1)

        await interaction.editReply(`Skipado para a track: ${trackNum}`)
	},
}