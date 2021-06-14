require('dotenv').config()

const Discord = require('discord.js')
const client = new Discord.Client({
  //Allows the bot to interacte with messages that existed before it logged in 
  partials: ["MESSAGE"]
})

const ASSING_ME_BEGINNER_ROLE = `[assign-me-beginner-role]`

const emojiArray = ['😀', '👾', '🤗', '🤪', '😋']

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageDelete', message => {
  message.channel.send("Don't delete message")
})

client.on('message', message => {
  if (message.content === 'Give me an emoji') {
    const randomEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)]

    message.react(randomEmoji)
  }

  if (message.content === ASSING_ME_BEGINNER_ROLE) {
    message.reply(`You've gotten the role of ${message.guild.roles.cache.get("717884817454137385")}`)
    message.member.roles.add('717884817454137385')

  }
})

client.login(process.env.BOT_TOKEN)