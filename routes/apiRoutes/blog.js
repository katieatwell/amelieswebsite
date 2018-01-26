const router = require("express").Router();
const cheerio = require("react-native-cheerio");
const axios = require("axios");

let db = require('../../models/index.js');

router.get("/", (req, res) => {
    axios.get("http://www.ameliesfrenchbakery.com/blog/441").then((response) => {

        const $ = cheerio.load(response.data);
        let results = {};
        let promisesArray = [];

        $("div.single-entry").each((i, element) => {
            const title = $(element).find("h2").text().trim();
            const dateUntrimmed = $(element).find(".blog-entry-date").text().trim();
            const dateUnparsed = dateUntrimmed.replace("Posted on ", "").replace("| Stefanie Haviv", "");
            const dateParsed = Date.parse(dateUnparsed);
            const summary = $(element).find(".small-12").find(".blog-entry-content").text().trim();
            const link = $(element).find(".small-12").find(".blog-entry-content").find("a").attr("href").trim();
            const img = $(element).find(".small-12").find("div").find("a").find("img").attr("src");

            results = {
                title: title,
                dateUnparsed: dateUnparsed,
                dateParsed: dateParsed,
                summary: summary,
                link: link,
                img: img
            };

            // console.log(dateParsed)
            // console.log("************************")
            // console.log(dateUnparsed)

            promisesArray.push(db.BlogModel.findOneAndUpdate({ title: results.title }, results, { upsert: true }))
            //find one and update based on title, if it's there, update it with results, then upsert means insert it if it doesn't exist

        });

        Promise.all(promisesArray)
            .then(() => {
                db.BlogModel
                    .find({}).sort({ dateParsed: -1 })
                    .then((scrapedResults) => {
                        // console.log("date: " + scrapedResults)
                        res.json(scrapedResults);
                    })
                    .catch((err) => {
                        res.json(err);
                    });
            });

    }).catch((err) => {
        res.json(err);
    });
});

module.exports = router;
