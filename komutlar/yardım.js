const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  
  .setTitle("Bot Komutları")
  .setAuthor("The.Unknowns.Bot | Yapımcı R3misTry#9359", "")
  .setColor("RANDOM")
  .setDescription('!!davet • Botun davet linkini atar.\n!!bug(Bakımdadır!) • Bottaki bugu bildirmenizi sağlar.\n!!ping • Botun pingini gösterir.\n!!sunucubilgi • Bu komutu hangi sunucuda kullanıysanız oranın bilgisini verir.\n!!yardım Yardım Komutlarını Gösterir')
  .setFooter("")
  .setThumbnail("")
  .setTimestamp()
  
  .addField("Moderasyon Komutları", "!!ban • Belirttiğiniz kişiyi sunucudan banlar.\n!!kick • Belirttiğiniz kişiyi sunucudan atar.\n!!sustur • Belirttiğin kişiyi susturur.\n!!temizle(miktar) • Sohbeti belirttiğin sayı kadar siler.\n!!unban • Belirttiğin kişinin sunucudaki yasağını kaldırır.\n!!oylama • Oylama Açarsınız.\n!!kilit(Süre) Bir Metin Kanalını Belirtilen Süre Kadar Kitler")
  .addField("Eğlence Komutları", "\n!!söv • Etiketlediğiniz kişiye Feci Şekilde Söver.\n!!yaz • Bota istediğiniz şeyi yazdırır.\n!!8ball • Bota Soru Sorar\n!!çayiç • Çay İçersiniz.\n!!çayaşekerat • Çaya Şeker Atarsınız.\n!!herkesebendençay • Herkese Çay Ismarlarsınız.\n!!emojiyazı Yazılarınızı Emojiye Dönüştürür.\n!!coolresim Rastgele Coolresimler Gösterir.\n!!balıktut Balık Tutarsınız\n!!yazıtura Yazı Tura Mı? Oynarsınız.\n!!sigaraic Sigara İçersiniz Bot Sigara İçmenizi Önermez.\n!!slots Slots Oyununu Oynarsınız.\n!!hesapla Örnek(!!hesapla 1+1)\n", true)
  .addBlankField(true)
  .addField(" Kullanıcı Komutları", "\n!!kurucu • Sunucunun kurucusunu gösterir.\n!!kullanıcıbilgim • Bu komutu kullanan her kimse hakkında bilgi verir.\n!!sunucuresmi Sunucunun Resmini Gösterir.\n!!reklamtaraması Reklam Taraması Yapar.\n!!saat Saati Gösterir.\n!!havadurumu(Şehir) Havadurumunu Gösterir.\n", true)
  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot bilgi', 'botbilgi', 'bb', 'botb', 'bbot', 'hakkında', 'bot hakkında', 'bothakkında'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Bot ile ilgili komut listesini verir.',
  usage: 'yardım'
};