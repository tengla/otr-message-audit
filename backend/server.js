
const express = require('express');
// fetch messages from db
const db = require('./messages');

const app = express();
const port = 3001;

app.use(express.static('public'))

app.get('/messages', require('./routes')(db).messagesRoute);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at 0.0.0.0:${port}`);
});
