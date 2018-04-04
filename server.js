// const http = require('http');
// const fs = require('fs');
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// fs.readFile('src/index.html', (err, html) => {
//   if(err){
//     throw err;
//   }
//
//   const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write(html);
//     res.end();
//   });
//
//   server.listen(port, hostname, () => {
//     console.log('Server started on port ' + port);
//   });
// });

let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let pg = require("pg");
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
  res.status(404).sendFile(process.cwd() + '/app/views/404.htm');
});

io.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
});
