const express = require('express');
const { middlewareAuth } = require('../../middleware/jwt-authorization');
const summaryRouter = express.Router();
const parser = express.json();
const SummaryService = require('./summary-service');

summaryRouter
	.route('/')
	.get(middlewareAuth, async (req, res, next) => {
		try{
			const user_id = req.user.id;
            const db = req.app.get('db');
            const summary = await SummaryService.getSummary(db, user_id)
            res.send({
                data: {
                    summary
                }
            });
        } catch(error){
            next(error)
        }
	})
	.post(parser, async (req, res, next) => {
		try {
			const { store, amazontotal, ebaytotal, besbuytotal, walmarttotal, targettotal, total } = req.body;
			const db = req.app.get('db');
			
			// await SummaryService
			// 	.then(async (newSummary) => {
			// 		SummaryService.insertBudget(db, newSummary) ;
			// 		return newSummary;
			// 	})
		}catch (error){}
	});

summaryRouter
	.route('/add/amazon')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
			console.log("req",req)
            const amount = req.query.amount;
            const db = req.app.get('db');
            await SummaryService.updateAmazon(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});

summaryRouter
	.route('/add/bestbuy')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
            const amount = req.query.amount;
            const db = req.app.get('db');
            await SummaryService.updateBestBuy(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});

summaryRouter
	.route('/add/ebay')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
            const amount = req.query.amount;
            const db = req.app.get('db');
            await SummaryService.updateEbay(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});
module.exports = summaryRouter;