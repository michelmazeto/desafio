const express = require('express');
const eventController = require('./../controllers/eventController');

const router = express.Router();

router
   .route('/')
   .get(eventController.getAllEvents)
   .post(eventController.createEvent);

router
   .route('/:id')
   .get(eventController.getEventId)
   .delete(eventController.deleteEventId);

router
    .route('/:weekDay')
    .get(eventController.getEventWeek)
    .delete(eventController.getEventWeek);

module.exports = router;