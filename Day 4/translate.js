const discord = require('discord.js')
const translate = require('@iamtraction/google-translate')

module.exports = {
name: "translate",
aliases: ['tr'],
category: 'info',
  description: "Translate a language",
  usage: "!translate [language ISO code] [word]",

  run: async (client, message, args) => {  
   
   
    const txt = args.slice(1).join(" ")
    const lang = args[0]
    if(!lang) return message.reply("Please mention the ISO code of the language")
    if(!txt) return message.reply("Mentioin a text to translate bruh...")
    translate(txt, { to: lang }).then(res => {
        const embed = new discord.MessageEmbed()
        .setAuthor('Translate 🌎')
        .setDescription(res.text)
        .setColor("GREEN")
        .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true, size: 1024 }))
        .setTimestamp()
        message.channel.send(embed); 
      }).catch(err => {
        message.reply("Please mention a valid ISO code of the language [ISO code list](https://www.loc.gov/standards/iso639-2/php/code_list.php)")
      });

}
}
