const express = require('express');
const eventController = require('./../controllers/eventController');

const router = express.Router();

router
   .route('/')
   .get(eventController.getAllEvents)
   .post(eventController.createEvent);

   router
   .route('/:id')
   .get(eventController.getEventById)
   .delete(eventController.deleteEventById);
 
 router
   .route('/week/:day')
   .get(eventController.getEventsByDay)
   .delete(eventController.deleteEventByDay);

module.exports = router;