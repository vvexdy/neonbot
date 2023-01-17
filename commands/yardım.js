const { EmbedBuilder } = require("discord.js");

exports.run = async (client, message, args) => {

  const embed = new EmbedBuilder()
  .setColor("#EB459E")
  .setTitle(`${message.guild.name} | Commands`)
  .setThumbnail(`${message.author.displayAvatarURL({ dynamic: true })}`)
  .setDescription("**-kay�t-yard�m** -> Kay�t komutlar�n� goruntuler \n **-abone-yard�m** -> Abone komutlar�n� goruntuler \n **-ba�vuru-yard�m** -> Ba�vuru komutlar�n� g�r�nt�ler") 
  .setFooter({ text: `Asked by ${message.author.tag}.`, iconURL: `${message.author.displayAvatarURL({ dynamic: true })}` })    
  .setTimestamp()  

  return message.reply({ embeds: [embed] })

};
exports.conf = {
  aliases: ["yard�m"]
};

exports.help = {
  name: "help"
};