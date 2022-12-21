const express = require('express');
const searchRouter = express.Router();
const parser = express.json();
const unirest = require("unirest");
const cheerio = require("cheerio");

searchRouter  
    .route('/')
    .get(parser, async (req, res, next) => {
        try
        {
            const { q } = req.query;
            return unirest
                .get(`https://www.google.com/search?q=${q}&source=lnms&tbm=shop&gl=us`)
                .headers({
                "User-Agent":
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36",
                })
                .then((response) => {
                    let $ = cheerio.load(response.body);
                    const data = {shopping_results: []};
                    $(".sh-dgr__content").each((i,el) => {
                        data.shopping_results.push({
                            title: $(el).find(".tAxDx").text(),
                            link: $(el).find(".zLPF4b .eaGTj a.shntl").attr("href").substring($(el).find("a.shntl").attr("href").indexOf("=")+1),
                            source: $(el).find(".IuHnof").text(),
                            price: $(el).find(".XrAfOe .a8Pemb").text(),
                            img: $(el).find('.ArOc1c').children().eq(1).attr('data-image-src')
                        })
                    })
                    return res.send(data);
                })
        } catch (error) {
            next(error);
        }
    }
);
module.exports = searchRouter;
