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
  const eventId = req.params.id
  const uid = req.uid

  try{
    const event = await Event.findById( eventId );

    if( !event ){
      return res.status(404).json({
        ok: false,
        msg: 'The event does not exist.'
      })
    }

    if( event.user.toString() !== uid){
      return res.status(401).json({
        ok: false,
        msg: 'You do not have permission to update this event.'
      })
    }

    const newEvent = {
      ...req.body,
      user: uid
    }

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } )

    return res.status(200).json({
      ok: true,
      event: newEvent
    })
  }catch(error){
    res.status(500).json({
      ok: false,
      msg: 'There was an error. Talk to an admin about it.'
    })
 }
}

const deleteEvent = async (req, res) => {
  const eventId = req.params.id
  const uid = req.uid

  try{
    const event = await Event.findById( eventId );

    if( !event ){
      return res.status(404).json({
        ok: false,
        msg: 'The event does not exist.'
      })
    }

    if( event.user.toString() !== uid){
      return res.status(401).json({
        ok: false,
        msg: 'You do not have permission to delete this event.'
      })
    }

    await Event.findByIdAndDelete( eventId )

    return res.status(200).json({
      ok: true,
      msg: 'Event deleted successfully'
    })
  }catch(error){
    res.status(500).json({
      ok: false,
      msg: 'There was an error. Talk to an admin about it.'
    })
 }
}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}