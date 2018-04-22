const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM3NTUxODA1NTg1NDI0Mzg0.Db30lg.livVJHfN8iH9dp7eb-n4AkI6jJ4';

client.on('ready', () => {
  console.log('Sunt pregatit!');
  client.user.setStatus("dnd");
  client.user.setGame("⚒ Welcome - Bot ⚒")
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`:hugging: Bun venit în comunitatea noastra, ${member}!
:black_small_square: Nu uita sa vizitezi. :black_small_square: 
**{#aplicatie-staff}** Pentru a intra in staff, 
**{#rules}** Regulile serverului.
**{#announcement}**,anunturile serverului. :tada:
`);
});

client.login('NDM3NTUxODA1NTg1NDI0Mzg0.Db30lg.livVJHfN8iH9dp7eb-n4AkI6jJ4');
