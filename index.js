const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAAHSntSINgwBAIYrL2LBH1wrW1DZCIRxgN3vqlfYRVg5iEImQKeoAdjTywBLZARHMdmgrTLz3VaPw23pcZBqbztvU8ZCsLrIZCnnonAU3w9bnUUj9TZC2DIGEKLpwTRClQ6LTV3a6rjAQS035J65zSqPu37JJZCcrG0pHhqAE4K4wZDZD',
  verify: 'VERIFY_TOKEN',
  app_secret: 'f77e803a2aa9d726a112bb64a2d4db71'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3200)
console.log('Echo bot server running at port 3200.')
