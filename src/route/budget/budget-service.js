
const budgetService = {
	getBudget(db) {
		return db 
			.select('budgets.store')
			.from('budgets');
	},

	insertBudget(db, newBudget) {
		return db
			.insert(newBudget)
			.into('budgets')
			.returning('*')
			.then(([budget]) => budget);
	}
};

module.exports = budgetService;