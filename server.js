const express = require('express')
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use(bodyParser.json()); // support json encoded bodies
const router = express.Router();
var shortid = require('shortid');
const port = process.env.PORT || 3000;



let event1 = {
  "id": shortid.generate(),
  "title": "Volleyball",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}

let event2 = {
  "id": shortid.generate(),
  "title": "Swimming",
  "description": "Outdoor sport",
  "date": "29-06-2018"
}

let event3 = {
  "id": shortid.generate(),
  "title": "Football",
  "description": "Outdoor sport",
  "date": "09-07-2018"
}

let events = {
  "1": event1,
  "2": event2,
  "3": event3
}

// ES6 Arrow function
app.use(router);
app.get('/events', (req, res) => res.send(events));

app.get('/events/:id', (req, res) => {
  if(req.params.id in events) {
    res.send(events[req.params.id]);
  } else {
    res.send(404);
  }
});

app.post('/events', function(req, res) {
  var newEvent = {
    "id": shortid.generate(),
    "title": req.body.title,
    "description": req.body.description,
    "date": req.body.date
  }
  var num = Object.keys(events).length + 1;
  events[num] = newEvent;
  res.send(events[num]);
});

app.patch('/events/:id', function(req, res) {
  if(req.params.id in events) {
    if(req.body.title) {
      events[req.params.id]["title"] = req.body.title;
    } else if(req.body.description) {
      events[req.params.id]["description"] = req.body.description;
    } else if(req.body.date) {
        events[req.params.id]["date"] = req.body.date;
    }
    res.send(events[req.params.id]);
  } else {
    res.send(404);
  }
});

app.delete('/events/:id', function(req, res) {
  if(req.params.id in events) {
    delete events[req.params.id]

    console.log(Object.keys(events).length)
    //console.log(events)
      res.send(events);
  } else {
    res.send(404)
  }
});

app.listen(port);
console.log('Example app listening on port ' + port);












//
