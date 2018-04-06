
let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let flash = require('connect-flash');

const app = express();
const PORT = process.env.PORT || 5000;

// Chat application components
var routes 		= require('./src/utils/routes.js');
var session 	= require('./src/utils/session.js');
var passport    = require('./src/utils/auth.js');
var io 	= require('./src/utils/socket.js')(app);

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', routes);

// Middleware to catch 404 errors
app.use(function(req, res, next) {
  res.status(404).sendFile(process.cwd() + '/src/views/404.html');
});

io.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
