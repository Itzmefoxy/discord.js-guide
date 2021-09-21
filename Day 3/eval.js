const db = require("quick.db")
//type "npm i quick.db" at shell/console
module.exports = {
  name: "eval",
  ownerOnly: true,
  category: 'owner',
  description: 'Only For Owner BRUH -_-',
  run: async(client, message, args) => {
      const clean = text => {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      return text;
}
        try {
 
      const code = args.slice().join(" ");
      let evaled = eval(code);
 
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
 
      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
}
//ownerOnly at index.js
