const client = require('alexflipnote.js');
const alexclient = new client('Your AlexFlipnote Token'); //get token from https://discord.gg/2ze3YgR4VG

module.exports = {
  name: 'achievement',
  description: 'Make Minecraft Achievement',
  category: 'fun',

run: async(client, message, args) => {

let thistext = args.join(" ")

let link = await alexclient.image.achievement({text: thistext});
message.channel.send({files: [{ attachment: link }]});

}
}
