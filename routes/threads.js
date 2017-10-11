'use strict';

const bcrypt = require('bcrypt-as-promised');
const boom = require('boom');
const express = require('express');
const jwt = require('jsonwebtoken');
const knex = require('../knex');
const { camelizeKeys } = require('humps');

const router = express.Router();

router.get('/threads', (req, res, next) => {
    knex('threads')
      .orderBy('title')
      .then((threads) => {
        res.send(camelizeKeys(threads))
      })
      .catch((err) => {
        next(err);
      })
})

router.get('/thread/:id', (req, res, next) => {
  knex('threads')
    .where('id', req.params.id)
    .then((threads) => {
      if (!threads) {
        return next();
      }
      res.send(camelizeKeys(threads))
    })
    .catch((err) => {
      next(err);
    })
})

module.exports = router;