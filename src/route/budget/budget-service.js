
const budgetService = {
	getBudget(db, user_id) {
		return db 
			.select('*')
			.from('limits')
			.where('user_id', user_id)
	},
	updateAmazon(db, user_id, amount) {
		return db
			.into('limits')
			.where({user_id})
			.update({'amazon': amount})
	},
	updateBestBuy(db, user_id, amount) {
		return db
			.into('limits')
			.where({user_id})
			.update({'bestbuy': amount})
	},
	updateEbay(db, user_id, amount) {
		return db
			.into('limits')
			.where({user_id})
			.update({'ebay': amount})
	}
};

module.exports = budgetService;