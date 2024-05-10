var express = require('express');
var router = express.Router();

function randomQuote() {
  const quotes = [
    'Khaaannn!',
    'Highly illogical.',
    'Make it so, Number One.',
    'Shut up, Wesley!',
    'Tea, Earl Grey, hot.',
    'I protest! I am not a Merry Man!',
    'Captain Kirk is climbing a mountain. Why is he climbing a mountain?',
    'Because he is in love with the mountain',
  ];

  const index = Math.floor(Math.random() * quotes.length);

  return quotes[index];
}

router.get('/', function (req, res, next) {
  const quote = randomQuote();
  res.render('auto_load_trek', { quote });
});

router.get('/click', function (req, res, next) {
  const quote = randomQuote();
  res.render('click_trek', { quote });
});

module.exports = router;
