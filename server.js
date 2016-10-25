/*---------------------------DEPENDENCIES -----------------------------*/
const express = require('express');
const app = express();

/*---------------------------FUNCTIONS -----------------------------*/
const loginAdmin = require('./backend/functions/admin/login-admin');
const getStaff = require('./backend/functions/admin/get-staff');
const makeList = require('./backend/functions/admin/make-list');
const adminUpdateEvent = require('./backend/functions/admin/admin-update-event')
const adminUpdateStaff = require('./backend/functions/admin/admin-update-staff');
const staffEvent = require('./backend/functions/admin/staff-event');
const removeEventStaff = require('./backend/functions/admin/remove-event-staff');
// admin post message (select between caterers/hosts/staff)
const addCaterer = require('./backend/functions/caterer/add-caterer');
const loginCaterer = require('./backend/functions/caterer/login-caterer');
const reviewStaff = require('./backend/functions/caterer/remove-caterer-staff');
// caterer post message (select between admin/hosts)
const addHost = require('./backend/functions/host/add-host');
const loginHost = require('./backend/functions/host/login-host');
const addEvent = require('./backend/functions/host/add-event');
const hostUpdateEvent = require('./backend/functions/host/host-update-event');
const deleteEvent = require('./backend/functions/host/delete-event');
// host post message (select between admin/caterer)
const addStaff = require('./backend/functions/staff/add-staff');
    // essentially creates when they submit application
const loginStaff = require('./backend/functions/staff/login-staff');
const staffUpdateStaff = require('./backend/functions/staff/staff-update-staff');
const getEvents = require('./backend/functions/staff/get-events');
const eventResponse = require('./backend/functions/staff/event-response');
// staff post message (to admin)

/*----- Serve Frontend -----*/
app.use(express.static('./build'));

/*----- Allow CORS-----*/
app.use(function(request, response, next) {
  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  response.header("Access-Control-Allow-Methods", "PUT");
  next();
});

/*--------------------------- ADMIN ENDPOINTS ----------------------------*/
// Admin log-in
app.get('/admin/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    loginAdmin(username, password).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Get all staff or staff by a certain filter
app.get('/staff', (req, res) => {
    let filter = req.body.filter;
    getStaff(filter).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Make list of staff approved for caterer (by caterer_id) who have certain attire
app.get('/caterers_staff/:caterer_id/:attire', (req, res) => {
    let caterer_id = req.params.caterer_id;
    let attire = req.params.attire
    makeList(caterer_id, attire).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Update staff (by staff_id)
app.put('staff/admin_update/:staff_id', (req, res) => {
    let staff_id = req.params.staff_id;
    let updated_staff = req.body;
    adminUpdateStaff(staff_id, updated_staff).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Update event (by event_id)
app.put('/events/admin_update/:event_id', (req, res) => {
    let event_id = req.params.event_id;
    let updated_event = req.body;
    adminUpdateEvent(event_id, updated_event).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Make add array of staff (by staff_id) to event (by event_id)
app.post('/events_staff/:event_id', (req, res) => {
    let event_id = req.params.event_id;
    let staff = req.body.staff
    staffEvent(event_id, staff).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.status(201).json();
    });
});

// Remove staff (by staff_id) from event (by event_id)
app.delete('events_staff/:event_id/:staff_id', (req, res) => {
    let event_id = req.params.event_id;
    let staff_id = req.params.staff_id
    removeEventStaff(event_id, staff_id).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});
// store custom lists that he can pick from
// ability to send to all or select individual results or select # of results

/*--------------------------- CATERER ENDPOINTS ----------------------------*/
// Register caterer
app.post('/caterers', function(req, res) {
    let caterer = req.body;
    addCaterer(caterer).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.status(201).json();
    });
});

// Caterer log-in
app.get('/caterers/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    loginHost(username, password).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Remove authorized staff (by staff_id) for a caterer (by caterer_id)
app.delete('/caterers_staff/:caterer_id/:staff_id', (req, res) => {
    let caterer_id = req.params.caterer_id;
    let staff_id = req.params.staff_id
    removeCatererStaff(caterer_id, staff_id).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});
// Request staff for event / request 
// 

/*--------------------------- HOST ENDPOINTS ----------------------------*/
// Host register
app.post('/hosts', function(req, res) {
    let host = req.body;
    addHost(host).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.status(201).json();
    });
});

// Host log-in
app.get('/hosts/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    loginHost(username, password).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Add event for a host (by host_id)
app.post('/events/:host_id', function(req, res) {
    let host_id = req.params.host_id
    let event = req.body;
    addEvent(host_id, event).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.status(201).json();
    });
});

// Add event for a host (by host_id)
app.put('/events/host_update/:event_id', function(req, res) {
    let event_id = req.params.event_id
    let updated_event = req.body;
    hostUpdateEvent(event_id, updated_event).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Add event for a host (by host_id)
app.delete('/events/delete/:event_id', function(req, res) {
    let event_id = req.params.event_id
    deleteEvent(event_id).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

/*--------------------------- STAFF ENDPOINTS ----------------------------*/
// Staff register
app.post('/staff', function(req, res) {
    let staff = req.body;
    addStaff(staff).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.status(201).json();
    });
});

// Staff log-in
app.get('/staff/login', function(req, res) {
    let username = req.body.username;
    let password = req.body.password;
    loginStaff(username, password).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Update staff (by staff_id)
app.put('staff/staff_update/:staff_id', (req, res) => {
    let staff_id = req.params.staff_id;
    let updated_staff = req.body;
    staffUpdateStaff(staff_id, updated_staff).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Get events for staff member (by staff_id) -- all, past, or upcoming
app.get('/events/:staff_id', function(req, res) {
    let staff_id = req.params.staff_id;
    // specifies past, upcoming or all events
    let which_events = req.body;
    getEvents(staff_id, which_events).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

// Respond to a request to work
app.put('events/respond/:staff_id/:event_id', (req, res) => {
    let staff_id = req.params.staff_id;
    let event_id = req.params.event_id;
    let eventRes = req.body;
    eventResponse(staff_id, event_id, eventRes).then((err, data) => {
        if (err) {
            console.error(err);
            return res.sendStatus(500);
        }
        res.json(data);
    });
});

/*--------------------------- RUN SERVER -------------------------------*/
function runServer(callback) {
    let PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Listening on localhost: ${PORT}`);
        if (callback) {
            callback();
        }
    });
}

if (require.main === module) {
    runServer((err) => {
        if (err) {
            throw new Error(err);
        }
    });
}
