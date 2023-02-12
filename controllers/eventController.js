const fs = require('fs');

let events = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/events-simple.json`)
);

// GERAL
exports.getAllEvents = (req, res) => {
    console.log(req.requestTime);

    res.status(200).json({
        status: 'sucess',
        requestedAt: req.requestTime,
        results: events.length,
        data: {
            events
        }
    });
}

exports.createEvent = (req, res) => {
    const newId = events[events.length - 1]._id + 1;
    const newEvent = {
        id: newId,
        description: req.body.description,
        dateTime: req.body.dateTime,
        createdAt: req.body.createdAt
    };

    events.push(newEvent);

    fs.writeFile(
        `${__dirname}/data/events-simple.json`,
        JSON.stringify(events),
        err => {
            if (err) {
                res.status(500).json({
                    status: 'error',
                    message: 'Ocorreu um erro ao criar o evento'
                });
            } else {
                res.status(201).json({
                    status: 'sucess',
                    data: {
                        event: newEvent
                    }
                });
            }
        }
    );
};

// ID

exports.deleteEventById = (req, res) => {
    const id = req.params.id * 1;
    
    const event = events.find(el => el._id === id);
    if (event === -1) return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
    });

    events.splice(event, 1);

    res.status(204).json({
        status: 'success',
        data: null
    });
};

exports.getEventById = (req, res) => {
    console.log(req.params);
    
    const id = req.params.id;

    const event = events.find(el => el._id === id);

    if (!event) return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
    });

    res.status(200).json({
        status: 'success',
        data: {
            event
        }
    });
}

//DIA DA SEMANA
exports.getEventsByDay = (req, res) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const requestedDay = req.params.day;
  
    if (!daysOfWeek.includes(requestedDay)) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid day'
      });
    }
  
    const eventsByDay = events.filter(event => {
      const eventDay = new Date(event.dateTime).toLocaleDateString('en-US', { weekday: 'long' });
      return eventDay === requestedDay;
    });
  
    if (!eventsByDay.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'No events found for that day'
      });
    }
  
    res.status(200).json({
      status: 'success',
      data: {
        eventsByDay
      }
    });
  };

  exports.deleteEventByDay = (req, res) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const requestedDay = req.params.day;
  
    if (!daysOfWeek.includes(requestedDay)) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid day'
      });
    }
  
    const eventsToRemove = events.filter(event => {
      const eventDay = new Date(event.dateTime).toLocaleDateString('en-US', { weekday: 'long' });
      return eventDay === requestedDay;
    });
  
    if (!eventsToRemove.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'No events found for that day'
      });
    }
  
    events = events.filter(event => !eventsToRemove.includes(event));
  
    res.status(204).json({
      status: 'success',
      data: null
    });
};

