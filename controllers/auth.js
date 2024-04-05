const createUser = (req, res) => {
  const { name, email, password} = req.body

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