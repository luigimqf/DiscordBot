const { SlashCommandBuilder } = require("@discordjs/builders")

module.exports = {
	data: new SlashCommandBuilder().setName("pause").setDescription("Pausa a musica"),
	run: async ({ client, interaction }) => {
		const queue = client.player.getQueue(interaction.guildId)

		if (!queue) return await interaction.editReply("Não tem musica")

		queue.setPaused(true)
        await interaction.editReply("Musica parou, /resume para voltar")
	},
}