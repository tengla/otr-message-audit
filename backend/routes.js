
const joi = require('joi');
const { timestamp, newUTCDate, parseUtc } = require('./dates');

const dateRegex = /^\d{4,4}-\d{2,2}-\d{2,2} \d{2,2}:\d{2,2}(:\d{2,2})?$/;

const querySchema = joi.object({
  from: joi.string().regex(dateRegex).required(),
  until: joi.string().regex(dateRegex).required(),
  train_id: joi.string().min(1).required(),
  country: joi.string().valid('NO', 'SE').required()
});

module.exports = (db) => {
  return {
    messagesRoute: async (req, res) => {
      const validation = querySchema.validate(req.query);
      if (validation.error) {
        return res.status(400).send({
          status: 400,
          error: 'Bad Request',
          message: JSON.stringify(validation.error)
        })
      }
      const train = validation.value;
      const [from, until] = [
        parseUtc(train.from),
        parseUtc(train.until)
      ].map(d => {
        return timestamp(
          newUTCDate(...d)
        )
      });
      const { train_id, country } = train;
      console.log('train_id', train_id, 'country',
        country, 'from', from, 'until', until);
      try {
        const msgs = await db.messagesQuery(
          train_id, country || 'NO', from, until);
        res.send(msgs);
      } catch (err) {
        console.error(err.message);
        return res.status(500).send({
          status: 500,
          error: 'Internal Server Error'
        });
      }
    }
  }
};
