"use strict";

let EventController = require('../lib/eventcontroller.common.js');

let ec = new EventController();

ec.on('testEvent', function(payload){
    console.log('A test event was emmited. The payload was "'+ payload +'"');
});

ec.on('testEvent', function(payload){
    console.log('I am also listening to test events.');
});

ec.emit('testEvent', 'Hello World!');