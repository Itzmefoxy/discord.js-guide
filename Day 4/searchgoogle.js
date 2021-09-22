const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "google-search",
  description: 'Google Search',
  aliases: ["gsearch", "google"],
  category: "info",
  run: async(client, message, args) => {

  let searching = new MessageEmbed()
  .setDescription('Searching')
  .setColor("RANDOM")

  let s = args.join("+")

  if(!s) 
  return message.channel.send('Please give me what you want to search')

  let got = new MessageEmbed()
  .setTitle(`Result For ${args.join(" ")}`)
  .setDescription(`[Click Here](https://www.google.com/search?q=${s})`)
  .setColor('GREEN')

  message.channel.send(searching)
  .then(message => {     setTimeout(function() { message.edit(got) }, 5000)})
}
}
