const express = require('express')
require('dotenv').config()
// Create server express
const app = express()

//Public directory
app.use(express.static('public'))

//Routes
app.get('/', (req, res) => {
  console.log('/ needed')
  res.json({
    ok: true
  })
})

//Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})