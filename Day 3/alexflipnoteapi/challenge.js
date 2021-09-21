const client = require('alexflipnote.js');
const alexclient = new client('API Token'); //Get from https://discord.gg/2ze3YgR4VG

module.exports = {
  name: 'challenge',
  description: 'Make Minecraft Challenge',
  category: 'fun',

run: async(client, message, args) => {

let thistext = args.join(" ")

let link = await alexclient.image.challenge({text: thistext});
message.channel.send({files: [{ attachment: link }]});

}
}
