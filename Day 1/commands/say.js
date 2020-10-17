const Discord = require('discord.js')

module.exports = {
  name: "say",
  description: "Say Command",
  execute(client, message, args) {
  
    let say = args.join(' ')
message.channel.send(say)
    
    message.delete()
  
  }
}
