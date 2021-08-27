
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('./knexfile')[env]);

module.exports.messages = async (from, until) => {
  console.log(from, until);
  return knex('incoming_message_audit')
    .whereBetween('nominal_date', [from, until])
    .limit(100);
};
