const express = require('express')
require('dotenv').config()
// Create server express
const app = express()

//Public directory
app.use(express.static('public'))

app.use( express.json() )
//Routes
// TODO: Auth routes // create, login, renew token
app.use('/api/auth', require('./routes/auth'))

// Body lecture & parse

// TODO: CRUD: Events

//Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})