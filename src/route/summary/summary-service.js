
const summaryService = {
	getSummary(db) {
		return db 
			.select('summarys.store')
			.from('summarys');
	},

	insertSummary(db, newSummary) {
		return db
			.insert(newSummary)
			.into('summarys')
			.returning('*')
			.then(([summary]) => summary);
	}
};

module.exports = summaryService;