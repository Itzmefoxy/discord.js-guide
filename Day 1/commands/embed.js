const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'embed',
  description: 'Create a custom embed',
  execute(client, message, args) {
    
    let text = args.join(' ')
    
    let embed = new MessageEmbed()
    .setDescription(`**${text}**`)
    .setColor('RANDOM')
    
    message.channel.send(embed)
   //were done here
  }
}
