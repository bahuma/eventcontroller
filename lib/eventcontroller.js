var EventController = function() {
  return {
    eventListeners: [],

    on: function(eventName, callback) {
      this.eventListeners.push({
        name: eventName,
        callback: callback
      });
    },

    emit: function(eventName, payload) {
      this.eventListeners.forEach(function(element) {
        if (element.name === eventName){
          element['callback'](payload);
        }
      })
    }
  }
};