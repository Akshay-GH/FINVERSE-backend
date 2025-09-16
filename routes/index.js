const express = require('express');
const router = express.Router();
const userRouter = require('./user.js');
const accountRouter = require('./accounts.js');

router.use('/users', userRouter);
router.use('/accounts', accountRouter);

module.exports = router;