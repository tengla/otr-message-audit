
const express = require('express');
const app = express();
const port = 3001;
const { messages } = require('./messages');
const { timestamp, newUTCDate } = require('./dates');

const parseUtc = (utcStr) => {
  const [date, time] = utcStr.split(' ');
  return date.split('-').map(n => Number.parseInt(n)).concat(
    time.split(':').map(n => Number.parseInt(n))
  );
};

app.get('/messages', async (req, res) => {
  const [from,until] = [
    parseUtc(req.query.from),
    parseUtc(req.query.until)
  ].map(d => {
    return timestamp(
      newUTCDate(...d)
    )
  });
  console.log('from', from, 'until', until)
  const msgs = await messages(
    from, until );
  res.send(msgs);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at 0.0.0.0:${port}`);
});
