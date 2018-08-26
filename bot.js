const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
require('./util/eventLoader')(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on("message", msg => {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Küfür Etme! :warning:').then(msg => msg.delete(3000));
             }              
          } catch(err) {
            console.log(err);
          }
        }
    });

client.on("message", msg => {
        const reklam = ["discordapp", "discord.gg", "discord.tk", "discordbots.org", "https://discordapp.com", "https://discord.gg", "http://discord.gg", "htpp:/discordapp.com", "https://discordbots.org", "https://", ".com", ".tr" ".net", ".xyz", "www."];
		       ];
        if (reklam.some(word => msg.content.includes(word))) {
          try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();

                  return msg.reply('Reklam Yapma! :warning:').then(msg => msg.delete(3000));
             }              
          } catch(err) {
            console.log(err);
          }
        }
    });

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on('message', message => {
if (message.content === '!!beniseviyormusun') {
       if (Math.floor((Math.random() * 15) + 1) === 1) {
           message.reply('%90😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 2) {
           message.reply('%0😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 3) {
           message.reply('%20😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 4) {
           message.reply('%50😍 :)');
       }else if (Math.floor((Math.random() * 15) + 1) === 5) {
           message.reply('%70😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 6) {
           message.reply('%80😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 7) {
           message.reply('%95😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 8) {
           message.reply('%81😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 9) {
           message.reply('%50😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 10) {
           message.reply('%35😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 11) {
           message.reply('%13😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 12) {
           message.reply('%100😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 13) {
           message.reply('%1😍');
       }else if (Math.floor((Math.random() * 15) + 1) === 14) {
           message.reply('%99😍');
      }else if (Math.floor((Math.random() * 15) + 1) === 15) {
           message.reply('%3😍');
       }
  }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "espriyap") {
    var sans = ["Geçen gün geçmiş günlerimi aradım ama meşguldü.", "Yağmur yağmış kar peynir", "Dünya dönermiş ay da köfte…", "Bu erikson başka erik yok.", "Yıkanan Ton a ne denir Washington", "Hadi oyun oynayalım. Vazgeçtim oymadan oynayalım!", "Geçen gün kamyonu sürdüm Leonardo da Vinci.", "Doğumdan sonra çok kilo aldım. Doğduğumda 2 kiloydum şimdi 62.", "Adam 7 gün boyunca nezle olmuş. Sıkılmış bugün de Petek le olayım demiş.", "Yarasa yararlı bir hayvandır. Yararlı bir hayvan olmasaydı yaramasa derlerdi.", " Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.", "Osmanlıda kimseye borç takamıyordun mesela sikke sikke ödüyodun…", "Tatlı yiyip, tatlı konuşuluyorsa bundan sonra mantı yiyip mantıklı konuşacağız.", "Babamı sahura kaldırmayı unuttuk anneme masada ne eksik diyorum tuzluk mu diyor.", "+Okeyde kıza elin nasıl dedim. Ojeli dedi. Ben Şoka girdim. O Migrosa.", "Canım sıkkın kanka sonra gel", "2 Gün Makarna Yedik Arkadaş Git Yoğurt Al Dedi Adam Yoğurtlu Makarna Yapmış"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .addField(`***___Espri___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', '😟Kayıtsız Üye😟'); 
  member.addRole(joinRole); 

  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on ('message', message => {
if (message.content === prefix + "sunucuemojileri") {
  const emojiList = message.guild.emojis.map(e=>e.toString()).join(" **|** ");
  message.channel.send(emojiList);
}
})

client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
  });

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply(':regional_indicator_a: :regional_indicator_l: :regional_indicator_e: :regional_indicator_y: :regional_indicator_k: :regional_indicator_u: :regional_indicator_m:      :regional_indicator_s: :regional_indicator_e: :regional_indicator_l: :regional_indicator_a: :regional_indicator_m:');
  }
});

client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(process.env.BOT_TOKEN);
