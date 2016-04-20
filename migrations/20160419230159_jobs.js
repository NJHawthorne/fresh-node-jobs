
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('jobs', function(t) {
		t.increments('id').unsigned().primary();
		t.string('title').notNull();
		t.string('description').notNull();
		t.integer('minSalary').nullable();
		t.integer('maxSalary').nullable();
		t.integer('companyId').notNull();
		t.integer('userId').notNull();

		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('jobs');
};
