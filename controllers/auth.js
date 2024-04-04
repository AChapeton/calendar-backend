const createUser = (req, res) => {
  res.json({
    ok: true,
    msg: 'Register'
  })
}

const loginUser = (req, res) => {
  res.json({
    ok: true,
    msg: 'Login'
  })
}

const renewToken = (req, res) => {
  res.json({
    ok: true,
    msg: 'Renew Token'
  })
}

module.exports = {
  createUser,
  loginUser,
  renewToken
}