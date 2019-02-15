const Discord = require('discord.js');
const A7MD = new Discord.Client();

console.log("BOT ONLINE");
 
A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سيرفرنا يرحب بك يا جميل لازم تدخل

<https://discord.gg/FhRSeRv>

:heart:

**`) 
}).catch(console.error)
})
A7MD.login("NTQ1NjcyNDEwNjMyODE0NTky.D0dNjA.RMrFc3hpZ0_tKMvFUTFTYg_Rz50");