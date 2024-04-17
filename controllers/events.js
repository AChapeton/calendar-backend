const getEvents = async (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: 'getEvents'
  })
}

const createEvent = async (req, res) => {
  return res.status(201).json({
    ok: true,
    msg: 'createEvent'
  })
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