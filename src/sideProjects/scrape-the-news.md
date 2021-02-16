---
type: 'side-project'
slug: /projects/scrape-the-news
date: '01/09/2020'
title: 'Scrape The News (Proof Of Concept)'
projectLink: 'https://words-news-scraper.herokuapp.com/'
period: ['septembre 2020', 'September 2020']
specialisms: ['expressjs', 'heroku', 'NLP', 'puppeteer', 'nodejs']
repository: 'https://github.com/derrmru/scrape-the-news'
description: 'Server-side scraper, mining data daily from the global news. ExpressJS API.'
---

### Whats In The News

Scrape News websites using Express JS and Puppeteer.

Proof of Concept.

Data is queried as JSON and visualised via frontend, e.g. [Mine The News](https://minethenews.com)

### Installation

1. Clone the repository in your command line by copying the below code. The development server will be started. Installation requires the [Github CLI](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) and [Node JS](https://nodejs.org/en/).

```
git clone https://github.com/derrmru/scrape-the-news.git
cd scrape-the-news
npm install
node App.js
```

### Used Technologies and Libraries

- [Express JS](https://expressjs.com/)
- [Heroku](https://www.heroku.com/)
- [Mongo DB](https://www.mongodb.com/)
- [Puppeteer](https://developers.google.com/web/tools/puppeteer)
- [Mongoose](https://mongoosejs.com/)
- [Node-CRON](https://www.npmjs.com/package/node-cron)

### Dev Dependencies

 - "body-parser": "^1.19.0",
 - "cors": "^2.8.5",
 - "dotenv": "^8.2.0",
 - "es6-promise": "^4.2.8",
 - "express": "^4.17.1",
 - "isomorphic-fetch": "^2.2.1",
 - "mongodb": "^3.6.2",
 - "mongoose": "^5.10.5",
 - "node-cron": "^2.0.3",
 - "puppeteer": "^5.3.0"