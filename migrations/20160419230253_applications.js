
exports.up = function(knex, Promise) {
  	return knex.schema.createTable('applications', function(t) {
		t.increments('id').unsigned().primary();
		t.text('coverLetter').notNull();
		t.string('resumeUrl').notNull();
		t.string('userId').notNull();

		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();
	});
};

exports.down = function(knex, Promise) {
  	return knex.schema.dropTable('applications');
};
