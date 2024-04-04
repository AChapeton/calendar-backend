/*
  Rutas de Usuarios / Auth
  URL: host + /api/auth
*/

const {Router} = require('express')
const { check } = require('express-validator')
const router = Router()
const { createUser, loginUser, renewToken } = require('../controllers/auth')


router.post(
  '/register', 
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be al least 6 characters lenght').isLength({ min: 6})
  ],
  createUser
)

router.post(
  '/', 
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be al least 6 characters lenght').isLength({ min: 6})
  ], 
  loginUser
)


router.get('/renew', renewToken)

module.exports = router