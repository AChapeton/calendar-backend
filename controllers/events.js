const Event = require('../models/Event')

const getEvents = async (req, res) => {
  const events = await Event.find().populate('user', 'fullname');

  return res.status(200).json({
    ok: true,
    events
  })
}

const createEvent = async (req, res) => {
  const event = new Event(req.body)

  try{
    event.user = req.uid
    
    const savedEvent = await event.save()

    res.status(201).json({
      ok: true,
      event: savedEvent
    })
  }catch(error){
    res.status(500).json({
      ok: false,
      msg: 'There was an error. Talk to an admin about it.'
    })
 }
}

const updateEvent = async (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: 'updateEvent'
  })
}

const deleteEvent = async (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: 'deleteEvent'
  })
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}