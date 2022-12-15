
const summaryService = {
	getSummary(db, user_id) {
		return db 
			.select('*')
			.from('summary')
			.where('user_id', user_id)
	},
	insertSummary(db, newSummary) {
		return db
			.insert(newSummary)
			.into('summarys')
			.returning('*')
			.then(([summary]) => summary);
	},
	updateAmazon(db, user_id, amount) {
		return db
			.into('summary')
			.where({user_id})
			.update({'amazon': amount})
	},
	updateBestBuy(db, user_id, amount) {
		return db
			.into('summary')
			.where({user_id})
			.update({'bestbuy': amount})
	},
	updateEbay(db, user_id, amount) {
		return db
			.into('summary')
			.where({user_id})
			.update({'ebay': amount})
	}
};

module.exports = summaryService;