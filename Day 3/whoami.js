module.exports = {
  name: 'whoami',
  category: 'fun',
  description: 'Show Who You Are',
  run: async(client, message, args) => {
  
  var text = ["a Crocodile", "a Ghost", "a Discord User", "a Minecraft Player", "a Memer", "sus", "a Impostor", "Nothing", "a Roblox Player", "a Duck", "a Human", "a ...", "a Moon", "a Kid"]

  var you = text[Math.floor(Math.random() * text.length)];
  message.reply("You're" + you);


  }
}
