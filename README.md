# Event Controller

This JS plugin lets you listen to and throw events.

For example you have a list of posts and you can "like" posts which then appear on a "like-list".
In the list you show a star beneath the liked post. On the "like-list" you have the ability to remove the post from your
like list. But when you click on that button you have to remove the star from the post list, too. And here you need this
plugin.

## Installation

### Plain JS

To install the plugin via bower execute the following command

```sh
$ bower install eventcontroller
```

Alternatively you can just download the zip from github and extract the files into your website.

Include the script like so:

```html
<script src="./bower_components/eventcontroller/lib/eventcontroller.min.js"></script>
```

### NodeJS
To install the plugin via npm execute the following command

```sh
$ npm install eventcontroller
```

You can include the script like so:

```js
const EventController = require('eventcontroller');
```

## Usage

### Create a new EventController

```js
var ec = new EventController();
```

### Throw an "unlike" event

```js
var button = document.getElementById('removeButton');
button.addEventListener('click', function() {
  ec.emit('unlike', 123);
})
```

This code is throwing an event which could be handled by any event listener which wants to.
As payload we send in this example the id of the item. You could also pass an object or an array.

Right now nothing would happen because we haven't added any listeners.


### Setup Listeners for the "unlike" event

```js
ec.on('unlike', function(payload) {
  console.log('The item with the id ' + payload + ' was unliked');
})
```