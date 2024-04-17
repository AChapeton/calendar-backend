const express = require('express')
const cors = require('cors')
const { dbConnection } = require('./database/config')
require('dotenv').config()
// Create server express
const app = express()

//Database
dbConnection()

app.use(cors())

//Public directory
app.use(express.static('public'))

app.use( express.json() )
//Routes
// TODO: Auth routes // create, login, renew token
app.use('/api/auth', require('./routes/auth'));
// TODO: CRUD: Events
app.use('/api/events', require('./routes/events'));

//Listen petitions
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})