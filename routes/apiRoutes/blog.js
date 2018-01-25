const router = require("express").Router();
const cheerio = require("cheerio");
const axios = require("axios");

let db = require('../../models/index.js');

router.get("/", (req, res) => {
    axios.get("http://www.ameliesfrenchbakery.com/blog/441").then((response) => {
        const $ = cheerio.load(response.data);
        let results = {};
        $("div.single-entry").each((i, element) => {
            const title = $(element).find("h2").text().trim();
            const date = $(element).find(".blog-entry-date").text().trim();
            const summary = $(element).find(".small-12").find(".blog-entry-content").text().trim();
            const link = $(element).find("h2").attr("href");
            const img = $(element).find(".small-12").find("href").find("img").attr("srcset");

            results = {
                title: title,
                date: date,
                summary: summary,
                link: link,
                img: img
            };
            console.log(results)
            db.BlogModel
                .create(results)
                .then((scrapedResults) => {
                    // console.log("-------------------------------");
                    // console.log(scrapedResults)
                    db.BlogModel
                        .find({})
                        .then((scrapedResults) => {
                            res.json(scrapedResults);
                        })
                        .catch((err) => {
                            res.json(err);
                        });
                })
        })

    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
