const express = require('express');
const budgetRouter = express.Router();
const parser = express.json();
const BudgetService = require('./budget-service');
const AuthorizationService = require('../authorization/authorization-service');
const budgetService = require('./budget-service');
const { middlewareAuth } = require('../../middleware/jwt-authorization');
const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])[\S]+/;

budgetRouter
	.route('/')
	.get(middlewareAuth, async (req, res, next) => {
		try{
			const user_id = req.user.id;
			const db = req.app.get('db');
			const budgets = await BudgetService.getBudget(db, user_id)
			res.send({
				data: {
					budgets
				}
			});
		} catch(error){
			next(error)
		}
	});

budgetRouter
	.route('/add/amazon')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
			console.log("req",req)
            const amount = req.query.amount;
            const db = req.app.get('db');
            await BudgetService.updateAmazon(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});

budgetRouter
	.route('/add/bestbuy')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
            const amount = req.query.amount;
            const db = req.app.get('db');
            await BudgetService.updateBestBuy(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});

budgetRouter
	.route('/add/ebay')
	.patch(middlewareAuth, async (req, res,next)=> {
		try{
			const user_id = req.user.id;
            const amount = req.query.amount;
            const db = req.app.get('db');
            await BudgetService.updateEbay(db,user_id, amount);
            
            res.send({
                data: {
                    amount
                }
            });
        } catch(error){
            next(error)
        }
	});
	
module.exports = budgetRouter;