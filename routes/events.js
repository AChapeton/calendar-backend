/*
  Rutas de Eventos
  URL: host + /api/events
*/

const { Router } = require('express')
const { check } = require('express-validator')
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events')
const { validateJWT } = require('../middlewares/validateJWT')
const { validateFields } = require('../middlewares/validateFields')
const { isDate } = require('../helpers/isDate')

const router = Router()

router.get('/', 
 
  getEvents
)

router.post('/', 
  [
    check('title', 'Title is required').not().isEmpty(),
    check('startDate', 'Start date is required').custom( isDate ),
    check('endDate', 'End date is required').custom( isDate ),
    validateFields
  ],  
  validateJWT, 
  createEvent
)

router.put('/:id', validateJWT, updateEvent)

router.delete('/:id', validateJWT, deleteEvent)

module.exports = router