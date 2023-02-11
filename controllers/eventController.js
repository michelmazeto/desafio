const fs = require('fs');

const events = JSON.parse(
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
    const newId = events[events.length - 1].id + 1;
    const newEvent = Object.assign({ id: newId }, req.body);

    events.push(newEvent);

    fs.writeFile(
        `${__dirname}/data/events-simple.json`,
        JSON.stringify(events),
        err => {
            res.status(201).json({
                status: 'sucess',
                data: {
                    event: newEvent
                }
            });
        }
    );
};

// ID

exports.deleteEventId = (req, res) => {
    if (req.params.id * 1 > events.length) return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
    });

    res.status(204).json({
        status: 'sucess',
        data: null
    });
};

exports.getEventId = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;

    if (id > events.length) return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
    });

    const event = events.find(el => el.id === id);

    res.status(200).json({
        status: 'sucess',
        data: {
            event
        }
    });
};

/*
// DIA DA SEMANA

exports.getEventWeek = (req, res) => {
    console.log(req.params);
    const day = req.params.day;

    const event = events.find(el => el.day === day);

    if (!event) return res.status(404).json({
        status: 'fail',
        message: 'Invalid day'
    });

    res.status(200).json({
        status: 'sucess',
        data: {
            event
        }
    });
};
*/