const express = require('express');
const summaryRouter = express.Router();
const parser = express.json();
const SummaryService = require('./summary-service');

summaryRouter
	.route('/')
	.get(async (req, res, next) => {
		const db = req.app.get('db');
		await SummaryService
    	.getSummary(db)
    	.then(summarys => {
    		!summarys
        	? res.status(400).send({ error: 'Can not get summary from the database' })
        	: res.status(200).send(summarys);
    	})
    	.catch(next);
	})
	.post(parser, async (req, res, next) => {
		try {
			const { store, amazontotal, ebaytotal, besbuytotal, walmarttotal, targettotal, total } = req.body;
			const db = req.app.get('db');

			await SummaryService
				.then(async (newSummary) => {
					SummaryService.insertBudget(db, newSummary) ;
					return newSummary;
				})
		}catch (error){}
	});
	
module.exports = summaryRouter;