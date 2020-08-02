const twilio = require('twilio')
const dotenv = require('dotenv')

const express = require('express')
const bodyParser = require('body-parser')

const { join } = require('path')

dotenv.config()

const client = twilio(
  process.env.ACCOUNT_SID,
  process.env.AUTH_TOKEN
)

console.log(`Sending: ${process.argv.slice(2).join(' ')}`)

// client.messages.create({
//   body: process.argv.slice(2).join(' '),
//   from: process.env.TWILIO_NUMBER,
//   to: process.env.PERSONAL_NUMBER
// })

const app = express()

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'src', 'index.html'), err => {
    console.error(err)
  })
})

const PORT = 8012

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})

const pizzas = {
  "DEMARCO": 0,
  "SUPER HERO": 0,
  "SAUSAGE AND PEPPERS": 0,
  "PEPP AND MUSH": 0,
  "BIANCA SUPREME": 0,
  "MELROSE": 0,
  "SUPER SUPREME": 0,
  "MEATBALL": 0,
  "LITTLE ITALY": 0,
  "ITALIAN STALLION": 0,
  "VEG OUT": 0,
  "DRUNK PIG": 0,
}
