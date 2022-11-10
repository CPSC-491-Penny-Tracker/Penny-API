const express = require('express');
const budgetRouter = express.Router();
const parser = express.json();
const BudgetService = require('./budget-service');
const AuthorizationService = require('../authorization/authorization-service');
const budgetService = require('./budget-service');
const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

budgetRouter
	.route('/')
	.get(async (req, res, next) => {
		const db = req.app.get('db');
		await BudgetService
    	.getBudget(db)
    	.then(budgets => {
    		!budgets
        	? res.status(400).send({ error: 'Can not get budget from the database' })
        	: res.status(200).send(budgets);
    	})
    	.catch(next);
	})
	.post(parser, async (req, res, next) => {
		try {
			const { store, budget } = req.body;
			const db = req.app.get('db');

			await BudgetService
				.then(async (newBudget) => {
					budgetService.insertBudget(db, newBudget) ;
					return newBudget;
				})
		}catch (error){}
	});
	
module.exports = budgetRouter;