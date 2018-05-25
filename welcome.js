const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDQ5NjQyNTc1NjIwNDcyODMy.DenriQ.r-TNynTZcXiuP4I3Y3ljackeWQU';

client.on('ready', () => {
  console.log('Sunt pregatit!');
  client.user.setStatus("dnd");
  client.user.setGame("⚒ Welcome-Bot ⚒")
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea noastra, ${member}!
:black_small_square: Nu uita sa vizitezi. :black_small_square: 
**Regulamentul** Regulile serverului.
**Index-ul/Informatiile/Anunturi**,anunturile serverului. :tada:`);
});

client.login('NDQ5NjQyNTc1NjIwNDcyODMy.DenriQ.r-TNynTZcXiuP4I3Y3ljackeWQU');
