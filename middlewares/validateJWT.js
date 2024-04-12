const jwt = require('jsonwebtoken')

const validateJWT = (req, res, next) => {
  //x-token in headers
  const token = req.header('x-token')

  if(!token){
    return res.status(401).json({
      ok: false,
      msg: 'There is no token available.'
    })
  }

  try{
    const payload = jwt.verify(
      token,
      process.env.SECRET_JWT_SEED
    )

    req.uid = payload.uid
    req.fullname = payload.fullname

  }catch(error){
    return res.status(401).json({
      ok: false,
      msg: 'Invalid Token.'
    })
  }

  next()
}

module.exports = {
  validateJWT
}