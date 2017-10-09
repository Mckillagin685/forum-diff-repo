'use strict';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();

app.disable('x-powered-by');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const morgan = require('morgan');

switch (app.get('env')) {
  case 'development':
    app.use(morgan('dev'));
    break;

  case 'production':
    app.use(morgan('short'));
    break;

  default:
}


app.use(bodyParser.json());
app.use(cookieParser());

const path = require('path');

app.use(express.static(path.join('public')));
app.use(express.static(path.join('node_modules')));

const token = require('./routes/token');
const users = require('./routes/users');
const threads = require('./routes/threads');
const posts = require('./routes/posts');
const comments = require('./routes/comments');


app.use(token);
app.use(users);
app.use(threads);
app.use(posts);
app.use(comments);

app.use((_req, res) => {
  res.sendStatus(404);
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  if (app.get('env') !== 'test') {

    console.log('Listening on port', port);
  }
});

module.exports = app;
