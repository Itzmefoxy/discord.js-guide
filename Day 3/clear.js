module.exports => {
  name: 'clear',
  aliases: ['bulkdelete', 'delete'],
  description: 'Clear a message!',
  //using the other thing
  run: async (client, message, args) => {
  
  let amount = args.join(' ')
  if(!amount) return message.channel.send('Give me the amount ||Bruh||')
    
    message.channel.bulkDelete(amount)
    //any errors? tell me :)
  }
}
