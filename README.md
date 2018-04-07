# Synchronous Chat

Sync Chat was created as a coursework for Network Applications at Heriot-Watt University.

[DEMO](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)

## Installation

Synchronous Chat requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd Synchronous-Chat
$ npm install
$ npm start
```

If the server fails to start, make sure that MongoDB and Redis Server are running in the background.
Also make sure that the correct configurations are set up for Redis and Mongo from within the `config.js` file and `db` folder.

### Technologies

the following technologies are used by Synchronous Chat:

* [Node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [jQuery] - javascript library
* [Socket.io] - bidirectional event based communication
* [Redis] - in-memory data structure store
* [Heroku] - application hosting
* [MongoDB] - database
* [Embedded JavaScript] - templating engine

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Node.js]: <http://nodejs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Socket.io]: <https://socket.io/>
   [Redis]: <https://redis.io/>
   [Heroku]: <https://www.heroku.com/>
   [MongoDB]: <https://www.mongodb.com/>
   [Embedded JavaScript]: <ejs.co/>
