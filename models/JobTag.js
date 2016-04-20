module.exports = bookshelf.model('JobTag', {
	tableName: 'jobTags',
	hasTimestamps: ['createdAt', 'updatedAt', 'deletedAt']
});