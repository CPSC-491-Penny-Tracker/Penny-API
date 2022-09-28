const express = require('express');
const searchRouter = express.Router();

searchRouter  
    .route('/')
    .get( async (req, res, next) => {
        try {
            const { q } = req.query;
            console.log(req)
            return res.send({
                data: {
                    q
                }
            });
        } catch (error) {
            next(error);
        }
    }
);
module.exports = searchRouter;
