const express = require('express');
const fs = require('fs');

const app = express();

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/quotes', (req, res) => {
  console.log('Requested received at /api/quotes');
  res.sendFile(__dirname + '/data/quotes.json', () => {
    console.log('Reponse returned - quotes.json');
  });
});

app.listen(app.get('port'), () => {
  console.log(`API Server running on http://localhost:${app.get('port')}/`);
});
