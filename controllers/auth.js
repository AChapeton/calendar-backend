const User = require('../models/User')

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

  await user.save()

  res.status(201).json({
    ok: true,
    user: {
      uid: user.id,
      fullname: user.fullname, 
      email: user.email
    }
  })
 }catch(error){
    res.status(500).json({
      ok: false,
      msg: 'There was an error.'
    })
 }
}

const loginUser = (req, res) => {
  const { email, password} = req.body

  return res.json({
    ok: true,
    msg: 'Login',
    user: {
      email, 
      password
    }
  })
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