let config 		= require('../config');
let Mongoose 	= require('mongoose');

var dbURI = process.env.MONGODB_URI;

const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
	bufferMaxEntries: 0, // If not connected, return errors immediately rather than waiting for reconnect
	socketTimeoutMS: 0,
	keepAlive: true,
	reconnectTries: 30
};

Mongoose.connect(dbURI, options, function (error) {
	if (error) {
		console.log ('ERROR connecting to: ' + dbURI + '. ' + error);
	} else {
		console.log ('Succeeded connected to: ' + dbURI);
	}
});

Mongoose.Promise = global.Promise;

module.exports = { Mongoose,
	models: {
		user: require('./schemas/user.js'),
		room: require('./schemas/room.js')
	}
};
