
const { valid } = require('joi');
const joi = require('joi');
const { timestamp, newUTCDate, parseUtc } = require('./dates');

const dateRegex = /^\d{4,4}-\d{2,2}-\d{2,2} \d{2,2}:\d{2,2}:\d{2,2}/;

const schema = joi.object({
  from: joi.string().regex(dateRegex).required(),
  until: joi.string().regex(dateRegex).required(),
  train_id: joi.string().min(1).required(),
  country: joi.string().valid('NO','SE').required()
});

module.exports = (db) => {
  return {
    messagesRoute: async (req, res) => {
      const validation = schema.validate(req.query);
      if (validation.error) {
        return res.status(400).send({
          status: 400,
          error: 'Bad Request',
          message: JSON.stringify(validation.error)
        })
      }
      const [from, until] = [
        parseUtc(req.query.from),
        parseUtc(req.query.until)
      ].map(d => {
        return timestamp(
          newUTCDate(...d)
        )
      });
      const { train_id, country } = req.query;
      console.log('train_id', train_id, 'country',
        country, 'from', from, 'until', until);
      const msgs = await db.messagesQuery(
        train_id, country || 'NO', from, until);
      res.send(msgs);
    }
  }
};
