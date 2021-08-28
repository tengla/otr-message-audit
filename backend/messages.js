
const env = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('./knexfile')[env]);

/**
 * messagesQuery
 * @param {string} train_id
 * @param {string} country
 * @param {Date} from
 * @param {Date} until
 * @returns [] message records
 */
module.exports.messagesQuery = async (train_id, country, from, until) => {
  return knex('incoming_message_audit')
    .where({
      train_id, country
    })
    .whereBetween('nominal_date', [from, until])
    .orderBy('timestamp')
    .orderBy('nominal_date')
    .orderBy('train_id');
};
