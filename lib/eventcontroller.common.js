"use strict";

class EventController {
  constructor(){
    this.eventListeners = [];
  }

  on(eventName, callback) {
    this.eventListeners.push({
      name: eventName,
      callback: callback
    });
  }
    
  emit(eventName, payload) {
    this.eventListeners.forEach(function(element) {
      if (element.name === eventName){
        element['callback'](payload);
      }
    })
  }
}

module.exports = EventController;