
const { messages } = require('./messages');
const { newUTCDate, timestamp } = require('./dates');


messages(
  timestamp(
    newUTCDate(2021, 8, 23, 00, 00)
  ),
  timestamp(
    newUTCDate(2021, 8, 24, 23, 59)
  )
).then(res => {
  console.log(res);
  process.exit(0);
})