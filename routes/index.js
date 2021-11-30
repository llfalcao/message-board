const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Dietrich',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Ophelia',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: 'New message' });
});

router.post('/new', function (req, res, next) {
  const { user, message: text } = req.body;
  messages.push({ text, user, added: new Date() });
  // Fix infinite loading
});

module.exports = router;
