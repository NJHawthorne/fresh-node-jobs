
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('jobTags', function(t) {
		t.increments('id').unsigned().primary();
		t.integer('jobId').notNull();
		t.integer('tagId').notNull();

		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('jobTags');
};
