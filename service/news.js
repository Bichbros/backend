
const BaseService = require('../service/baseService');
const config = require('../config/config');
const cheerio = require('cheerio');
const NEWS_SITE_NAME = 'ynet';

// News Service

class News extends BaseService{

    constructor() {
        super();
        this.config = config;
        this.info = [];
        this.url = '';
        this.htmlContent = '';
        this.fetchUrl();
    }

    // Methods

    collectData(htmlResult) {
        this.getArticles(htmlResult);
    }

    getInfo() {
        return this.info;
    }

    fetchUrl() {
         const url = this.config.sites
            .filter((item) => {
                return (item.name === NEWS_SITE_NAME);
            });
         this.url = url[0].url;
    }

    setHtmlContent(htmlResult) {
        this.htmlContent = htmlResult;
    }

    getUrl() {
        return this.url;
    }

    getArticles(htmlResult) {
        this.setHtmlContent(htmlResult);
        this.getMainArticle();
    }

    getMainArticle() {

        let title = '';
        let article = '';
        let link = '';

        // Get Title
        let $ = cheerio.load(this.htmlContent);
        $('.subtitle').filter(function() {
            const data = $(this);
            title = data.text();
        });

        // Get Article
        $('.sub-title').filter(function() {
            const data = $(this);
            article = data.text();
        });

        // Get Link to the article
        $('.sub-title').filter(function() {
            const data = $(this);
            link = data.attr('href');
        });

        const mainArticle = { title: title, article: article, link: link };
        this.info.push(mainArticle);
        console.log(this.info);
    }

    getSubArticles() {

        // TODO: get all articles in page

        /*
        let title = '';
        let $ = cheerio.load(this.htmlContent);
        $('.subtitle').filter(function() {
            const data = $(this);
            title = data.text();
        });
        this.info.push(title);
        console.log(this.info)
        */
    }
}

module.exports = News;