
exports.up = function(knex) {
  return knex.schema.createTable('incoming_message_audit', function(table) {
    table.string('train_id').notNullable();
    table.string('country').notNullable();
    table.date('nominal_date').notNullable();
    table.text('message').notNullable();
    table.timestamp('timestamp');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incoming_message_audit');
};
