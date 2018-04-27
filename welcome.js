const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDM5NDEzMDAzMzM1NzYxOTIw.DcSy4w.X8Tkz78oOz7jFQXpYPT4gV2kPT4';

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
**Aplicatiile de Staff/PartnerShip/** Pentru a intra in staff, 
**Regulamentul** Regulile serverului.
**Index-ul/Informatiile/Anunturi**,anunturile serverului. :tada:
`);
});

client.login('NDM5NDEzMDAzMzM1NzYxOTIw.DcSy4w.X8Tkz78oOz7jFQXpYPT4gV2kPT4');

client.on('ready', () => {
  client.user.setGame('⚒ Welcome-Bot ⚒', 'https://www.twitch.tv/streamerhouse')
})
