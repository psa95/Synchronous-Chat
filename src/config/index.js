var init = function () {

	if(process.env.NODE_ENV === 'production') {
		var redisURI 		= require('url').parse(process.env.REDIS_URL);
		var redisPassword 	= redisURI.auth.split(':')[1];
		return {
			db: {
				username: "accountAdmin",
				password: "password",
				host: "localhost",
				port: "27017",
				name: "sync-chat"
			},
			sessionSecret: "PBAAF20NACW1W40POOG",
			redis: {
				host: redisURI.hostname,
				port: redisURI.port,
				password: redisPassword
			}
		}
	}
	else {
		return require('./config.json');
	}
}

module.exports = init();
