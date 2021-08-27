
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('./knexfile')[env]);

module.exports.messages = async (train_id, country, from, until) => {
  return knex('incoming_message_audit')
    .where({
      train_id, country
    })
    .whereBetween('nominal_date', [from, until])
    .orderBy('timestamp')
    .orderBy('nominal_date')
    .orderBy('train_id');
};
