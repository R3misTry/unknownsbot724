module.exports = member => {
  const channel = member.guild.channels.find('name', 'gelen-giden');
  if (!channel) return;
  channel.send(`**📤 |** ${member} **Sunucudan çıkış yaptı, Görüşmek üzere Yine bekleriz!**`);
};