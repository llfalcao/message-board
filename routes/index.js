const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Helen',
    added: new Date(),
  },
  {
    text: 'To be, or not to be, that is the question.',
    user: 'Bill',
    added: new Date(),
  },
];

// GET homepage
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Mini Message Board',
    messages,
  });
});

// GET new message page
router.get('/new', function (req, res, next) {
  res.render('form', { title: 'Compose' });
});

// POST new message
router.post('/new', function (req, res, next) {
  const { user, message: text } = req.body;
  messages.push({ text, user, added: new Date() });
  res.redirect('/');
});

module.exports = router;
