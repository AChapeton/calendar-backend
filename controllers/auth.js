const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { generateJWT } = require('../helpers/jwt')

const createUser = async (req, res) => {
  const { email, password} = req.body

 try{
  let user = await User.findOne({ email })

  if(user) {
    return res.status(400).json({
      ok: false,
      msg: 'A user already exists with that email'
    })
  }
  
  user = new User(req.body)

  //Encript pasword
  const salt = bcrypt.genSaltSync()
  user.password = bcrypt.hashSync(password, salt)

  await user.save()

  const token = await generateJWT(user.id, user.name)

  res.status(201).json({
    ok: true,
    user: {
      uid: user.id,
      fullname: user.fullname, 
      email: user.email,
      token
    }
  })
 }catch(error){
    res.status(500).json({
      ok: false,
      msg: 'There was an error.'
    })
 }
}

const loginUser = async (req, res) => {
  const { email, password} = req.body

  try{
    const user = await User.findOne({ email })

    if(!user) {
      return res.status(400).json({
        ok: false,
        msg: 'That user does not exist with that email.'
      })
    }

    const validPassword = bcrypt.compareSync(password, user.password)

    if(!validPassword){
      return res.status(400).json({
        ok: false,
        msg: 'Incorrect password.'
      })
    }

    const token = await generateJWT(user.id, user.name)



    res.json({
      ok: true,
      user: {
        uid: user.id, 
        name: user.name,
        email: user.email,
        token
      }
    })
    
  }catch(error){
    console.log(error)
    res.status(500).json({
      ok: false, msg: 'There was an error.'
    })
  }
}

const renewToken = (req, res) => {
  return res.json({
    ok: true,
    msg: 'Renew Token'
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken
}