const fs = require('fs');

let events = JSON.parse(
    fs.readFileSync(`${__dirname}/../data/events-simple.json`)
);

// GERAL
exports.getAllEvents = (req, res) => {

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
    const newId = (parseInt(events[events.length - 1]._id) + 1).toString();
    const newEvent = Object.assign({ _id: newId }, req.body);

    events.push(newEvent);
    fs.writeFile(`${__dirname}/../data/events-simple.json`, JSON.stringify(events), err => {
        res.status(201).json({
            status: 'success',
            data: {
                event: newEvent
            }
        })
    });
}

// ID

exports.getEventById = (req, res) => {

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

exports.deleteEventById = (req, res) => {
    const id = req.params.id;

    const eventIndex = events.findIndex(el => el._id === id);
    if (eventIndex === -1) return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
    });

    events.splice(eventIndex, 1);

    res.status(204).json({
        status: 'success',
        data: null
    });
};

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

