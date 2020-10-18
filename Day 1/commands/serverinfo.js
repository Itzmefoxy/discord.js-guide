const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'server-info',
  description: 'Get the server information',
  execute(client, message) {
    
    let embed = new MessageEmbed()
    .setAuthor('Server Info / Information of this server', message.guild.iconURL({ dynamic: true }))
    .addField('Name', message.guild.name, true)
    .addField('ID', message.guild.id, true)
    .addField('Member', message.guild.memberCount, true)
    .addField('Owner', message.guild.owner, true)
    .addField('Verification Lvl', message.guild.verificationLevel, true)
    .addField('Created At', message.guild.createdAt, true)
    .setColor('RANDOM')
    .setThumbnail(message.guild.iconURL({ dynamic: true }))
    
    message.channel.send(embed)
  }
}
