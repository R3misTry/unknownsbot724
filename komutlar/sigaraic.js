const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
 message.channel.send({embed: {
		  file:"http://www.imgim.com/8109incij1258360.jpg",
          color: 0xD97634,
      description: "**Sigara içtin ama sigara sağlığa zararlıdır bunu bil**"
            }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sigara'],
  permLevel: 0
};

exports.help = {
  name: 'sigaraiç',
  description: 'Sigara içersiniz.',
  usage: 'sigaraiç'
};
