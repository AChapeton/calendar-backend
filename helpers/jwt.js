const jwt = require('jsonwebtoken')

const generateJWT = (uid, fullname) => {
  return new Promise((resolve, reject) => {
    const payload = {uid, fullname}
    jwt.sign(payload, process.env.SECRET_JWT_SEED, {
      expiresIn: '2h',
    }, (error, token) => {
      if(error){
        console.log(error)
        reject("Token could not be generated")
      }

      resolve( token )
    })
  })
}

module.exports = {
  generateJWT,
}