
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('companies', function(t) {
		t.increments('id').unsigned().primary();
		t.string('name').notNull();
		t.string('headquarters').notNull();
		t.string('description').notNull();
		t.integer('userId').nullable();

		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('companies');
};
