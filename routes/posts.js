'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

const authorize = function(req, res, next) {
  jwt.verify(req.cookies.token, process.env.JWT_KEY, (err, playload) => {
    if (err) {
      return next(boom.create(401, 'Unauthorized'));
    }

    req.claim = playload;

    next();
  });
};

router.get('/posts', (req, res, next) => {
    knex('posts')
      .orderBy('id')
      .then((posts) => {
        res.send(camelizeKeys(posts))
      })
      .catch((err) => {
        next(err);
      })
})

router.get('/post/:id', (req, res, next) => {
  knex('posts')
    .where('id', req.params.id)
    .then((posts) => {
      if (!posts) {
        return next();
      }
      res.send(camelizeKeys(posts))
    })
    .catch((err) => {
      next(err);
    })
})

router.post('/posts', authorize, (req, res, next) => {

  const newPost = {title: req.body.title, user_id: req.claim.id, thread_id: req.body.thread_id}

  if(!newPost.title || !newPost.title.trim()){
    return next(boom.create(400, 'Title must not be blank'));
  }

  if(!newPost.user_id){
    return next(boom.create(400, 'User Must be Logged in'))
  }

  if(!newPost.thread_id || !newPost.thread_id.trim()){
    return next(boom.create(400, 'Missing: Thread ID. Must post within a Thread'))
  }

  knex('users')
    .insert(newPost, '*')
    .catch((err) => {
      next(err)
    })

    res.send('Success')
})

// router.post('/users', (req, res, next) => {
//   const { firstName, lastName, email, password } = req.body;

//   console.log(req.body);

//   if (!firstName || !firstName.trim()) {
//     return next(boom.create(400, 'First name must not be blank'));
//   }

//   if (!lastName || !lastName.trim()) {
//     return next(boom.create(400, 'Last name must not be blank'));
//   }

//   if (!email || !email.trim()) {
//     return next(boom.create(400, 'Email must not be blank'));
//   }

//   if (!password || password.length < 8) {
//     return next(boom.create(
//       400,
//       'Password must be at least 8 characters long'
//     ));
//   }

//   knex('users')
//     .where('email', email)
//     .first()
//     .then((user) => {
//       if (user) {
//         throw boom.create(400, 'Email already exists');
//       }

//       return bcrypt.hash(password, 12);
//     })
//     .then((hashedPassword) => {
//       const { firstName, lastName } = req.body;
//       const insertUser = { firstName, lastName, email, hashedPassword };

//       return knex('users').insert(decamelizeKeys(insertUser), '*');
//     })
//     .then((rows) => {
//       const user = camelizeKeys(rows[0]);
//       const claim = { userId: user.id};
//       const token = jwt.sign(claim, process.env.JWT_KEY, {
//         expiresIn: '7 days'
//       });

//       res.cookie('token', token, {
//         httpOnly: true,
//         expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),  // 7 days
//         secure: router.get('env') === 'production'
//       });

//       delete user.hashedPassword;

//       res.send(user);
//     })
//     .catch((err) => {
//       next(err);
//     });
// });

module.exports = router;