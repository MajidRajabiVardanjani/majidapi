# MajidAPI - Majid WebService

# Install

```bash
npm i majidapi --save
```

# [Website](https://majidapi.ir/)

## [Telegram](https://t.me/majidapi)

#### [Telegram Support](https://t.me/MajidRajabi1379)

## List of APIs:

- **[Instagram](#Instagram)**
- **[GPT](#GPT)**
- **[Text To Speech](#Text-To-Speech)**
- **[TikTok](#TikTok)**
- **[NumberBook](#NumberBook)**
- **[Card number inquiry](#Card-number-inquiry)**
- **[Digikala](#Digikala)**
- **[Torob](#Torob)**
- **[AkharinKhabar](#AkharinKhabar)**
- **[Movies and series FilmRail](#Movies-and-series-FilmRail)**
- **[Melodify](#Melodify)**

## Instagram

```javascript
const {instagram} = require("majidapi/modules/social");

// Download with link
instagram({
    method: "download",
    url: "(Post-Reels-Story-Profile-Highlight) URL"
}).then(console.log);

// Download profile
instagram({
    method: "profile",
    username: "instagram"
}).then(console.log);

// Download stories
instagram({
    method: "stories",
    username: "instagram"
}).then(console.log);

// Download highlights
instagram({
    method: "highlights",
    username: "instagram"
}).then(console.log);

// Download highlight
instagram({
    method: "highlight",
    highlightId: "highlight:id"
}).then(console.log);
```

## GPT

```javascript
const {gpt} = require("majidapi/modules/ai");

// GPT 3.5 turbo
gpt({
    question: "hello how are you?"
}).then(console.log);
```

## Text To Speech

```javascript
const {tts} = require("majidapi/modules/tools");

// Text To Speech
tts({
    gender: "woman", // woman - man
    text: "Your text ..."
}).then(console.log);
```

## TikTok

```javascript
const {tiktok} = require("majidapi/modules/social");

// Download
tiktok({
    method: "download",
    url: "TikTok url ..."
}).then(console.log);

// Profile
tiktok({
    method: "profile",
    username: "Username of TikTok user"
}).then(console.log);
```

## NumberBook

### Only for Iran

```javascript
const {numberBook} = require("majidapi/modules/inquiry");

// Number Book
numberBook({
    phoneNumber: "mobile number"
}).then(console.log);

```

## Card number inquiry

### Only for Iran

```javascript
const {card, sheba} = require("majidapi/modules/inquiry");

// Card number inquiry
card({
    cardNumber: "16-digit card number"
}).then(console.log);

// Sheba number inquiry
sheba({
    sheba: "IR000000000000000000000000"
}).then(console.log);

```

## Digikala

### Only for Iran

```javascript
const {digikala} = require("majidapi/modules/shopping");

// Home
digikala({
    method: "home"
}).then(console.log);

// Categories
digikala({
    method: "categories"
}).then(console.log);

// Receive by category
digikala({
    method: "category",
    categoryId: "1",
    page: 1
}).then(console.log);

// Search
digikala({
    method: "search",
    search: "s25", // product name
    page: 1
}).then(console.log);

// Product specifications
digikala({
    method: "product",
    productId: "Product ID"
}).then(console.log);
```

## Torob

### Only for Iran

```javascript
const {torob} = require("majidapi/modules/shopping");

// Categories
torob({
    method: "categories"
}).then(console.log);

// Receive by category
torob({
    method: "category",
    categoryId: "1",
    page: 1
}).then(console.log);

// Search
torob({
    method: "search",
    search: "s25", // product name
    page: 1
}).then(console.log);

// Product specifications
torob({
    method: "product",
    productId: "Product ID"
}).then(console.log);
```

## AkharinKhabar

### Only for Iran

```javascript
const {akharinKhabar} = require("majidapi/modules/news");

// Categories
akharinKhabar({
    method: "categories"
}).then(console.log);

// Receive by category
akharinKhabar({
    method: "category",
    categoryId: "0",
    page: 1
}).then(console.log);

// Latest news
akharinKhabar({
    method: "latest",
    page: 1
}).then(console.log);

// Description of the news
akharinKhabar({
    method: "details",
    newsId: "News ID"
}).then(console.log);
```

## Movies and series FilmRail

### Only for Iran

```javascript
const {filmRail} = require("majidapi/modules/movie");

// Home page information
filmRail({
    method: "home"
}).then(console.log);

// Get the list of movies
filmRail({
    method: "movies",
    page: 1
}).then(console.log);

// Get the list of series
filmRail({
    method: "series",
    page: 1
}).then(console.log);

// Search for movies and series
filmRail({
    method: "search",
    search: "The name of the movie or series"
}).then(console.log);

// Specifications and download
filmRail({
    method: "details",
    id: "Movie ID"
}).then(console.log);
```

## Melodify

### Only for Iran

```javascript
const {melodify} = require("majidapi/modules/music");

// The latest
melodify({
    method: "newest",
    page: 1
}).then(console.log);

// Mixes
melodify({
    method: "mix",
    page: 1
}).then(console.log);

// The most popular
melodify({
    method: "popular",
    page: 1
}).then(console.log);

// Instagram trends
melodify({
    method: "instatrend",
    page: 1
}).then(console.log);

// Song search
melodify({
    method: "search",
    search: "song name",
    page: 1
}).then(console.log);

// Download
melodify({
    trackId: "Track ID"
}).then(console.log);
```