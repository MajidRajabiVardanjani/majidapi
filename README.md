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
- **[Pinterest](#Pinterest)**
- **[Google Translate](#Google-Translate)**
- **[NumberBook](#NumberBook)**
- **[TempMail](#TempMail)**
- **[Spotify](#Spotify)**
- **[SoundCloud](#SoundCloud)**
- **[X Downloader](#X-Downloader)**
- **[Logo](#Logo)**
- **[QRCode Creation](#QRCode-Creation)**
- **[GooglePlay](#GooglePlay)**
- **[Card number inquiry](#Card-number-inquiry)**
- **[Digikala](#Digikala)**
- **[Torob](#Torob)**
- **[AkharinKhabar](#AkharinKhabar)**
- **[Movies and series FilmRail](#Movies-and-series-FilmRail)**
- **[Melodify](#Melodify)**
- **[Bonbast](#Bonbast)**
- **[Gold Price](#Gold-Price)**
- **[Mobile Price](#Mobile-Price)**
- **[Car Price](#Car-Price)**
- **[BitPin Crypto Currency Price](#BitPin-Crypto-Currency-Price)**
- **[Fal](#Fal)**
- **[Joke](#Joke)**
- **[Aparat](#Aparat)**
- **[Weather](#Weather)**
- **[Myket](#Myket)**
- **[Captcha](#Captcha)**
- **[Mopon](#Mopon)**
- **[Dictionary of Dehkhoda](#Dictionary-of-Dehkhoda)**
- **[Dictionary of names](#Dictionary-of-names)**
- **[Estekhareh](#Estekhareh)**
- **[DateTime](#DateTime)**
- **[Drug information](#Drug-information)**
- **[Crypto News](#Crypto-News)**

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

```javascript
const {numberBook} = require("majidapi/modules/inquiry");

// Number Book
numberBook({
    phoneNumber: "mobile number"
}).then(console.log);

```

## Card number inquiry

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
    method: "download",
    trackId: "Track ID",
    out: "track.mp3"
}).then(console.log);
```

## Bonbast

```javascript
const {bonbast} = require("majidapi/modules/price");

// Bonbast
bonbast().then(console.log);
```

## Gold Price

```javascript
const {gold} = require("majidapi/modules/price");

// Gold
gold().then(console.log);
```

## Mobile Price

```javascript
const {mobile} = require("majidapi/modules/price");

// Mobile
mobile({
    model: "s25"
}).then(console.log);
```

## TempMail

```javascript
const {tempMail} = require("majidapi/modules/tools");

// Create a new email
tempMail({
    method: "new"
}).then(console.log);

// Receive messages
tempMail({
    method: "messages",
    email: "The email address you got from the 'new' method"
}).then(console.log);
```

## Spotify

```javascript
const {spotify} = require("majidapi/modules/music");

// Download from Spotify
spotify({
    url: "https://open.spotify.com/track/...",
    out: "track.mp3"
}).then(console.log);
```

## Car Price

```javascript
const {car} = require("majidapi/modules/price");

// Price list
car({
    method: "list"
}).then(console.log);

// Get the description
car({
    method: "info",
    id: "Car ID"
}).then(console.log);
```

## BitPin Crypto Currency Price

```javascript
const {bitpin} = require("majidapi/modules/price");

// Get rates
bitpin().then(console.log);
```

## QRCode Creation

```javascript
const {qrcode} = require("majidapi/modules/tools");

// QRCode
qrcode({
    text: "Hello",
    size: 512,
    out: "qrcode.png"
}).then(console.log);
```

## Pinterest

```javascript
const {pinterest} = require("majidapi/modules/social");

// Search
pinterest({
    method: "search",
    search: "Mobile"
}).then(console.log);

// Download Video
pinterest({
    method: "download",
    url: "https://pin.it/..."
}).then(console.log);
```

## Google Translate

```javascript
const {googleTranslate} = require("majidapi/modules/tools");

// Translate
googleTranslate({
    text: "سلام",
    to: "en"
}).then(console.log);
```

## Fal

```javascript
const {fal} = require("majidapi/modules/fun");

fal({
    type: "text" // text or photo
}).then(console.log);
```

## Joke

```javascript
const {joke} = require("majidapi/modules/fun");

joke().then(console.log);
```

## Logo

```javascript
const {ePhoto} = require("majidapi/modules/image");

// Making a logo
ePhoto({
    text: "MajidAPI"
}).then(console.log);
```

## X Downloader

```javascript
const {x} = require("majidapi/modules/social");

// Download
x({
    videoUrl: "x.com video url"
}).then(console.log);
```

## GooglePlay

```javascript
const {googlePlay} = require("majidapi/modules/googlePlay");

// Search
googlePlay({
    method: "search",
    search: "vpn"
}).then(console.log);

// Download
googlePlay({
    method: "download",
    search: "Google play app url"
}).then(console.log);
```

## Aparat

```javascript
const {aparat} = require("majidapi/modules/vide");

// Home
aparat({
    method: "home"
}).then(console.log);

// Categories
aparat({
    method: "categories"
}).then(console.log);

// Category
aparat({
    method: "category",
    catid: "Category ID",
    page: 1
}).then(console.log);

// Search
aparat({
    method: "search",
    search: "Music"
}).then(console.log);

// Info & Download
aparat({
    method: "download",
    uid: "Video ID (uid)"
}).then(console.log);
```

## Weather

```javascript
const {weather} = require("majidapi/modules/tools");

// Weather
weather({
    city: "tehran"
}).then(console.log);
```

## Myket

```javascript
const {myket} = require("majidapi/modules/myket");

// Search
myket({
    method: "search",
    search: "App Name"
}).then(console.log);

// Info & Download
myket({
    method: "info",
    packageName: "App Package Name"
}).then(console.log);
```

## Captcha

```javascript
const {captcha} = require("majidapi/modules/tools");

// Captcha generation
captcha({
    length: 10
}).then(console.log);
```

## SoundCloud

```javascript
const {soundCloud} = require("majidapi/modules/music");

// Search
soundCloud({
    method: "search",
    search: "Shayea"
}).then(console.log);

// Info
soundCloud({
    method: "info",
    url: "https://soundcloud.com/aslistream/too-ragi"
}).then(console.log);

// Info
soundCloud({
    method: "download",
    url: "https://soundcloud.com/aslistream/too-ragi"
}).then(console.log);
```

## Mopon

```javascript
const {mopon} = require("majidapi/modules/shopping");

// Home
mopon({
    method: "home"
}).then(console.log);

// Categories
mopon({
    method: "categories"
}).then(console.log);

// Category
mopon({
    method: "category",
    id: "zQoGQ",
    page: 1
}).then(console.log);

// Search
mopon({
    method: "search",
    search: "دیجی کالا",
    page: 1
}).then(console.log);

// Info
mopon({
    method: "info",
    id: "brkmG"
}).then(console.log);
```

## Dictionary of Dehkhoda

```javascript
const {dehkhoda} = require("majidapi/modules/dictionary");

// Dehkhoda
dehkhoda({
    word: "مجید"
}).then(console.log);
```

## Dictionary of names

```javascript
const {names} = require("majidapi/modules/dictionary");

// Names
names({
    name: "مجید"
}).then(console.log);
```

## Estekhareh

```javascript
const {estekhareh} = require("majidapi/modules/fun");

// Estekhareh
estekhareh().then(console.log);
```

## DateTime

```javascript
const {dateTime} = require("majidapi/modules/tools");

// Date & Time
dateTime({
    timeZone: "Asia/Tehran"
}).then(console.log);
```

## Drug information

```javascript
const {darooyab} = require("majidapi/modules/drug");

// Search
darooyab({
    method: "search",
    search: "ملاتونین"
}).then(console.log);

// Info
darooyab({
    method: "info",
    url: "The link you got from the search method"
}).then(console.log);
```

## Crypto News

```javascript
const {crypto} = require("majidapi/modules/news");

// List
crypto({
    method: "list",
    page: 1
}).then(console.log);

// Info
crypto({
    method: "info",
    link: "The link you got from the search method"
}).then(console.log);
```


