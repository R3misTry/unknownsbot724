exports.run = async (client, msg, args) => {
  let kufur=[
    "Ananın Amına Bacağımı Sokarım!",
    "Babanı,Anneni Ve Seni Sikerim!",
    "Seni Yarrak Yaparım Sonra Müzik Dinlettiririm",
    "Senin Ananın Amını 10m Çubukla Sikerim!",
    "Senin Anana Patates Sokarım!",
    "Senin Babanı Annenin Amını Yapıştırırım!",
    "Ananın Amına Bilardo Topu Sokup Beyine Vururum!",
    "Senin Ananın Amıyla Babanın Götünü Karıştırırım!",
    "Ananı Öyle Bir Sikerimki Hıçkırır!",
    "Ananın Amını Sınava Sokarım 3 Milyon Kişiden 3 Milyonuncu Ederim!",
    "Hiç Sövmek İstemedim Adam Şanslı Gününde :)",
    "Ananın Amını Çeşmede Yıkarım",
    "Seni Sikerim!",
    "Senin Amını Öyle Bir Sikerimki Amından Kan Gelir!",
    "Söverdimde Anan Beni Çok Yordu",
    "Hiç Sövmek İstemedim Adam Şanslı Gününde :)",
    "Senin Götüne Susturucu Takarım",
  ]
     let member = msg.mentions.members.first()
   if(!member)return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign: Ya geçerli birini etiketle ya da sana sövmemi istiyosan kendini etiketle.')
}});
  if(member.id === "323381872392536064")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (':no_entry_sign:Yapımcım mı sakın!!!. Sakın Birdağa Öyle Birşey Yapma!!!.')
}})
  if(member.id === "420591871803392031")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Sen Kimi Etiketlediğinin Farkındamısın O Etiketi Götüne Yapıştırırım Adam Ol!!!`)
}})
  if(member.id === "480846373131124738")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Sen kime sövüyorsun DiggerArt(ReidMos) Bak Karışmam O Seni Döver!`)
}})
  if(member.id === "388549433064947712")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Sakın Ha Birdaha En İyi Moderatöre Söve Ağzında Patlar!!!`)
}})
  if(member.id === "408624222060019723")return msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Sen kime Sövüyon Ortağımamı Bak Ananı Sikerim Bidağa Etiketleme Onu!!`)
}})
  if(member.id === client.user.id){
    msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`:no_entry_sign: Beni mi kandırcan orospu çocuğu ?`)
}})
  }
  else{
  msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: (`${member} ${kufur[Math.floor(Math.random() * 16)]}.`)
}})
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };

exports.help = {
  name: 'söv',
  description: 'Bir Kişiye Söver!',
  usage: 'söv'
 }
