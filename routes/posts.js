'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

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

module.exports = router;