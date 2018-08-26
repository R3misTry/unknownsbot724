const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply('botta bulduğun bugu vermeyi unuttun.');
    message.channel.send({embed: {
        color: 3447003,
        description: "botta bulduğun bugu gönderdim en az 2 günde incelenecektir! :white_check_mark: \nSpam yazmayınız aksi takdirde bloke edilirsin."
      }});
    let str = "<@323381872392536064>";
    let id = str.replace(/[<@!>]/g, '');
    client.fetchUser(id)
        .then(user => {user.send(`bug : **${mesaj}**\n\nGönderen: **${message.author.username}**`)})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bug',
  description: 'Botta Bulduğunuz Bugları İletir',
  usage: 'bug [yazı]'
};
