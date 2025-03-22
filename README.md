# MajidAPI - Majid WebService

# Install

```bash
npm i majidapi --save
```

# [مستندات فارسی](README-FA.md)

# [Website](https://majidapi.ir/)

## [Telegram](https://t.me/majidapi)

#### [Telegram Support](https://t.me/MajidRajabi1379)

## List of APIs:

- **[Instagram](#Instagram)**
- **[Facebook](#Facebook)**
- **[GPT](#GPT)**
- **[Text To Speech](#Text-To-Speech)**
- **[Speech To Text](#Speech-To-Text)**
- **[AI Image Generator](#AI-Image-Generator)**
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
- **[Nobitex Crypto Currency Price](#Nobitex-Crypto-Currency-Price)**
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
- **[Farsroid](#Farsroid)**
- **[Tabir Khab](#Tabir-Khab)**
- **[Cooking](#Cooking)**
- **[BirthDate](#BirthDate)**
- **[Football360](#Football360)**
- **[Font](#Font)**
- **[General Information](#General-Information)**
- **[Pinglish To Farsi](#Pinglish-To-Farsi)**
- **[Footballi](#Footballi)**
- **[Remove Photo Background](#Remove-Photo-Background)**
- **[Hadith](#Hadith)**
- **[Sokhan](#Sokhan)**
- **[PaNaPa](#PaNaPa)**
- **[Bio](#Bio)**
- **[Divan Hafez](#Divan-Hafez)**
- **[Proxy List](#Proxy-List)**
- **[Story](#Story)**
- **[Website ScreenShot](#Website-ScreenShot)**
- **[Angizeshi](#Angizeshi)**
- **[National Code](#National-Code)**
- **[Owghat Sharei](#Owghat-Sharei)**
- **[Wikipedia](#Wikipedia)**
- **[SMS Bomber](#SMS-Bomber)**
- **[Danestani](#Danestani)**
- **[Blur photo background](#Blur-photo-background)**

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

// GPT 3
gpt({
    model: "3",
    question: "hello how are you?"
}).then(console.log);

// GPT 3.5 turbo
gpt({
    model: "3.5",
    question: "hello how are you?"
}).then(console.log);

// GPT Evil
gpt({
    model: "evil",
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

// News list
car({
    method: "news",
    page: 1
}).then(console.log);

// News info
car({
    method: "news-info",
    newsId: "The news id"
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
    text: "MajidAPI",
    out: "logo.jpg"
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

// Download
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

## AI Image Generator

```javascript
const {image} = require("majidapi/modules/ai");

// Text To Image
image({
    prompt: "a cute cat"
}).then(console.log);
```

## Farsroid

```javascript
const {farsroid} = require("majidapi/modules/farsroid");

// Search
farsroid({
    method: "search",
    search: "AI",
    page: 1
}).then(console.log);

// Download
farsroid({
    method: "download",
    url: "The url you got from the previous method"
}).then(console.log);
```

## Tabir Khab

```javascript
const {tabirKhab} = require("majidapi/modules/fun");

// Tabir Khab
tabirKhab({
    word: "مار"
}).then(console.log);
```

## Cooking

```javascript
const {cooking} = require("majidapi/modules/fun");

// Home
cooking({
    method: "home",
    page: 1
}).then(console.log);

// Search
cooking({
    method: "search",
    search: "سوخاری"
}).then(console.log);

// Info
cooking({
    method: "info",
    url: "The url you got from the previous method"
}).then(console.log);
```

## Speech To Text

```javascript
const {stt} = require("majidapi/modules/ai");

// STT
stt({
    audioURL: "MP3 URL ..."
}).then(console.log);
```

## BirthDate

```javascript
const {birthDate} = require("majidapi/modules/fun");

// BithDate Info
birthDate({
    year: "1380",
    month: "01",
    day: "01"
}).then(console.log);
```

## Facebook

```javascript
const {facebook} = require("majidapi/modules/social");

// Download video
facebook({
    url: "The facebook video url"
}).then(console.log);
```

## Football360

```javascript
const {football360} = require("majidapi/modules/sport");

// List of competitions
football360({
    method: "competitions"
}).then(console.log);

// Competition info
football360({
    method: "competition",
    id: "The ID you got from the previous method"
}).then(console.log);

// Posts
football360({
    method: "posts",
    page: 1
}).then(console.log);

// Post
football360({
    method: "post",
    id: "The ID you got from the previous method"
}).then(console.log);

// Live results
football360({
    method: "live"
}).then(console.log);
```

## Font

```javascript
const {font} = require("majidapi/modules/fun");

// Font
font({
    lang: "en", // en | fa
    text: "MajidAPI"
}).then(console.log);
```

## General Information

```javascript
const {generalInformation} = require("majidapi/modules/fun");

// General Information
generalInformation().then(console.log);
```

## Pinglish To Farsi

```javascript
const {pinglish2farsi} = require("majidapi/modules/tools");

//  Pinglish To Farsi
pinglish2farsi({
    text: "Salam khoobi?"
}).then(console.log);
```

## Footballi

```javascript
const {footballi} = require("majidapi/modules/sport");

// List of competitions
footballi({
    method: "competitions"
}).then(console.log);

// Competition info
footballi({
    method: "competition",
    id: "The ID you got from the previous method"
}).then(console.log);

// News list
footballi({
    method: "news",
    cusrot: ""
}).then(console.log);

// News Info
footballi({
    method: "info",
    id: "The ID you got from the previous method"
}).then(console.log);
```

## Remove Photo Background

```javascript
const {removeBackground} = require("majidapi/modules/image");

// Remove Background
removeBackground({
    imageURL: "The photo url",
    out: "rm-bg.jpg"
}).then(console.log);
```

## Hadith

```javascript
const {hadith} = require("majidapi/modules/fun");

// Hadith
hadith().then(console.log);
```

## Sokhan

```javascript
const {sokhan} = require("majidapi/modules/fun");

// Sokhan Bozorgan
sokhan().then(console.log);
```

## PaNaPa

```javascript
const {panapa} = require("majidapi/modules/fun");

// Pa Na Pa
panapa().then(console.log);
```

## Bio

```javascript
const {bio} = require("majidapi/modules/fun");

// Bio Farsi
bio().then(console.log);
```

## Divan Hafez

```javascript
const {divanHafez} = require("majidapi/modules/fun");

// Search
divanHafez({
    search: "الا یا"
}).then(console.log);

// By number
divanHafez({
    no: 1 // 1 - 495
}).then(console.log);
```

## Proxy List

```javascript
const {proxyList} = require("majidapi/modules/tools");

// List of proxies
proxyList({
    protocol: "socks5" // socks5 - socks4
}).then(console.log);
```

## Story

```javascript
const {story} = require("majidapi/modules/fun");

// Story
story().then(console.log);
```

## Website ScreenShot

```javascript
const {screenShot} = require("majidapi/modules/tools");

// ScreenShot
screenShot({
    type: "photo", // photo or url
    url: "https://majidapi.ir",
    width: 1280,
    height: 2000,
    out: "shot.jpg"
}).then(console.log);
```

## Angizeshi

```javascript
const {angizeshi} = require("majidapi/modules/fun");

// Angizeshi
angizeshi().then(console.log);
```

## National Code

```javascript
const {nationalCode} = require("majidapi/modules/tools");

// Validation
nationalCode({
    code: ""
}).then(console.log);
```

## Nobitex Crypto Currency Price

```javascript
const {nobitex} = require("majidapi/modules/price");

// All currencies
nobitex().then(console.log);

// Get currency
nobitex({
    currency: "btv"
}).then(console.log);
```

## Owghat Sharei

```javascript
const {owghat} = require("majidapi/modules/tools");

// Owghat
owghat({
    city: "tehran"
}).then(console.log);
```

## Wikipedia

```javascript
const {Wikipedia} = require("majidapi/modules/Wikipedia");

// featured
Wikipedia({
    acion: "featured"
}).then(console.log);

// Search
Wikipedia({
    acion: "search",
    search: "ایران",
    page: 1
}).then(console.log);

// Info
Wikipedia({
    acion: "info",
    title: "ایران"
}).then(console.log);
```

## SMS Bomber

```javascript
const {smsBomber} = require("majidapi/modules/tools");

// SMS Bomber
smsBomber({
    phone: "09..."
}).then(console.log);
```

## Danestani

```javascript
const {danestani} = require("majidapi/modules/fun");

// Danestani
danestani().then(console.log);
```

## Blur photo background

```javascript
const {blurBackground} = require("majidapi/modules/image");

// Blur background
blurBackground({
    imageURL: "jpg | jpeg | png"
}).then(console.log);
```