const ownerID = ["ID 1", "ID 2", "..."]
	if (command.ownerOnly) {
		if (!ownerID.includes(message.author.id))
			return message.channel.send('This command can only be use by owner');
    //you can add this into your index
