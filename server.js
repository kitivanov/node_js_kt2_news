const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");

const categories = {
    business: "business",
    economic: "economic",
    finances: "finances",
    politics: "politics",
    auto: "auto"
};

app.get("/:count/news/for/:category", async (req, res) => {
    const count = parseInt(req.params.count);
    const category = req.params.category.toLowerCase();

    if (!categories[category]) {
        return res.send("Категория не найдена");
    }

    const rssUrl = `https://www.vedomosti.ru/rss/rubric/${categories[category]}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    try {
        const response = await axios.get(apiUrl);
        let items = response.data.items || [];

        if (count > 0) {
            items = items.slice(0, count);
        }

        res.render("news", { news: items, category: category });
    } catch (err) {
        console.error(err);
        res.send("Ошибка при получении новостей");
    }
});

app.listen(3000, () => {
    console.log("Сервер запущен на http://localhost:3000");
});
