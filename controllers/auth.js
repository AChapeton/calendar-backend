const { validationResult } = require('express-validator')

const createUser = (req, res) => {
  const {name, email, password} = req.body

  const errors = validationResult(req)

  if(!errors.isEmpty()){
    return res.status(400).json({
      ok: false,
      errors: errors.mapped()
    })
  }

  return res.status(201).json({
    ok: true,
    msg: 'Register',
    user: {
      name, 
      email, 
      password
    }
  })
}

const loginUser = (req, res) => {
  const {name, email, password} = req.body

  const errors = validationResult(req)

  if(!errors.isEmpty())
  return res.status(400).json({
    ok: false,
    errors: error.mapped()
  })

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