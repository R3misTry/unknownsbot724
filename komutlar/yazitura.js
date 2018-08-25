const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message) => {
   message.channel.send('Yazı Mı? Çıkıcak Tura Mı?...').then(message => {
   var espriler = ['Yazı' ,'Tura','Yazı','Tura'];
      var espri = espriler[Math.floor(Math.random() * espriler.length)];
            message.edit(`${espri}`);
 });
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['espri', 'espri-yap', 'yap-espri', 'yapbi-espri'],
  permLevel: 0
};

exports.help = {
  name: 'yazıtura',
  description: 'Yazı Mı Turamı Oynarsın.',
  usage: 'yazıtura'
};
