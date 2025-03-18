# MajidAPI - Majid WebService

# Install

```bash
npm i majidapi --save
```

# [en documents](README.md)

# [وبسایت](https://majidapi.ir/)

## [تلگرام](https://t.me/majidapi)

#### [پشتیبانی تلگرام](https://t.me/MajidRajabi1379)

## List of APIs:

- **[اینستاگرام](#اینستاگرام)**
- **[فیسبوک](#فیسبوک)**
- **[جی پی تی](#جی-پی-تی)**
- **[متن به گفتار](#متن-به-گفتار)**
- **[گفتار به متن](#گفتار-به-متن)**
- **[ساخت عکس با هوش مصنوعی](#ساخت-عکس-با-هوش-مصنوعی)**
- **[تیک تاک](#تیک-تاک)**
- **[پینترست](#پینترست)**
- **[ترجمه گوگل](#ترجمه-گوگل)**
- **[مزاحم یاب](#مزاحم-یاب)**
- **[ایمیل فیک](#ایمیل-فیک)**
- **[اسپاتیفای](#اسپاتیفای)**
- **[ساوندکلاود](#ساوندکلاود)**
- **[توییتر دانلودر](#توییتر-دانلودر)**
- **[لوگو](#لوگو)**
- **[ساخت کیوآرکد](#ساخت-کیوآرکد)**
- **[گوگل پلی](#گوگل-پلی)**
- **[استعلام شماره کارت](#استعلام-شماره-کارت)**
- **[دیجی کالا](#دیجی-کالا)**
- **[ترب](#ترب)**
- **[آخرین خبر](#آخرین-خبر)**
- **[فیلم و سریال فیلم ریل](#فیلم-و-سریال-فیلم-ریل)**
- **[ملودیفای](#ملودیفای)**
- **[بن بست](#بن-بست)**
- **[قیمت طلا](#قیمت-طلا)**
- **[قیمت موبایل](#قیمت-موبایل)**
- **[قیمت خودرو](#قیمت-خودرو)**
- **[نرخ ارز دیجیتال بیت پین](#نرخ-ارز-دیجیتال-بیت-پین)**
- **[فال](#فال)**
- **[جوک](#جوک)**
- **[آپارات](#آپارات)**
- **[آب و هوا](#آب-و-هوا)**
- **[مایکت](#مایکت)**
- **[کپچا](#کپچا)**
- **[موپن](#موپن)**
- **[لغت نامه دهخدا](#لغت-نامه-دهخدا)**
- **[فرهنگ نام ها](#فرهنگ-نام-ها)**
- **[استخاره](#استخاره)**
- **[تاریخ و ساعت](#تاریخ-و-ساعت)**
- **[اطلاعات دارویی](#اطلاعات-دارویی)**
- **[اخبار کریپتو](#اخبار-کریپتو)**
- **[فارسروید](#فارسروید)**
- **[تعبیر خواب](#تعبیر-خواب)**
- **[آشپزی](#آشپزی)**
- **[اطلاعات تاریخ تولد](#اطلاعات-تاریخ-تولد)**
- **[فوتبال360](#فوتبال360)**
- **[فونت](#فونت)**
- **[اطلاعات عمومی](#اطلاعات-عمومی)**
- **[تبدیل پینگلیش به فارسی](#تبدیل-پینگلیش-به-فارسی)**
- **[فوتبالی](#فوتبالی)**
- **[حذف پس زمینه عکس](#حذف-پس-زمینه-عکس)**
- **[حدیث](#حدیث)**
- **[سخن بزرگان](#سخن-بزرگان)**
- **[پ ن پ](#پ-ن-پ)**
- **[بیو](#بیو)**

## اینستاگرام

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

## جی پی تی

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

## متن به گفتار

```javascript
const {tts} = require("majidapi/modules/tools");

// Text To Speech
tts({
    gender: "woman", // woman - man
    text: "Your text ..."
}).then(console.log);
```

## تیک تاک

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

## مزاحم یاب

```javascript
const {numberBook} = require("majidapi/modules/inquiry");

// Number Book
numberBook({
    phoneNumber: "mobile number"
}).then(console.log);

```

## استعلام شماره کارت

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

## دیجی کالا

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

## ترب

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

## آخرین خبر

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

## فیلم و سریال فیلم ریل

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

## ملودیفای

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

## بن بست

```javascript
const {bonbast} = require("majidapi/modules/price");

// Bonbast
bonbast().then(console.log);
```

## قیمت طلا

```javascript
const {gold} = require("majidapi/modules/price");

// Gold
gold().then(console.log);
```

## قیمت موبایل

```javascript
const {mobile} = require("majidapi/modules/price");

// Mobile
mobile({
    model: "s25"
}).then(console.log);
```

## ایمیل فیک

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

## اسپاتیفای

```javascript
const {spotify} = require("majidapi/modules/music");

// Download from Spotify
spotify({
    url: "https://open.spotify.com/track/...",
    out: "track.mp3"
}).then(console.log);
```

## قیمت خودرو

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

## نرخ ارز دیجیتال بیت پین

```javascript
const {bitpin} = require("majidapi/modules/price");

// Get rates
bitpin().then(console.log);
```

## ساخت کیوآرکد

```javascript
const {qrcode} = require("majidapi/modules/tools");

// QRCode
qrcode({
    text: "Hello",
    size: 512,
    out: "qrcode.png"
}).then(console.log);
```

## پینترست

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

## ترجمه گوگل

```javascript
const {googleTranslate} = require("majidapi/modules/tools");

// Translate
googleTranslate({
    text: "سلام",
    to: "en"
}).then(console.log);
```

## فال

```javascript
const {fal} = require("majidapi/modules/fun");

fal({
    type: "text" // text or photo
}).then(console.log);
```

## جوک

```javascript
const {joke} = require("majidapi/modules/fun");

joke().then(console.log);
```

## لوگو

```javascript
const {ePhoto} = require("majidapi/modules/image");

// Making a logo
ePhoto({
    text: "MajidAPI",
    out: "logo.jpg"
}).then(console.log);
```

## توییتر دانلودر

```javascript
const {x} = require("majidapi/modules/social");

// Download
x({
    videoUrl: "x.com video url"
}).then(console.log);
```

## گوگل پلی

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

## آپارات

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

## آب و هوا

```javascript
const {weather} = require("majidapi/modules/tools");

// Weather
weather({
    city: "tehran"
}).then(console.log);
```

## مایکت

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

## کپچا

```javascript
const {captcha} = require("majidapi/modules/tools");

// Captcha generation
captcha({
    length: 10
}).then(console.log);
```

## ساوندکلاود

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

## موپن

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

## لغت نامه دهخدا

```javascript
const {dehkhoda} = require("majidapi/modules/dictionary");

// Dehkhoda
dehkhoda({
    word: "مجید"
}).then(console.log);
```

## فرهنگ نام ها

```javascript
const {names} = require("majidapi/modules/dictionary");

// Names
names({
    name: "مجید"
}).then(console.log);
```

## استخاره

```javascript
const {estekhareh} = require("majidapi/modules/fun");

// Estekhareh
estekhareh().then(console.log);
```

## تاریخ و ساعت

```javascript
const {dateTime} = require("majidapi/modules/tools");

// Date & Time
dateTime({
    timeZone: "Asia/Tehran"
}).then(console.log);
```

## اطلاعات دارویی

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

## اخبار کریپتو

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

## ساخت عکس با هوش مصنوعی

```javascript
const {image} = require("majidapi/modules/ai");

// Text To Image
image({
    prompt: "a cute cat"
}).then(console.log);
```

## فارسروید

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

## تعبیر خواب

```javascript
const {tabirKhab} = require("majidapi/modules/fun");

// Tabir Khab
tabirKhab({
    word: "مار"
}).then(console.log);
```

## آشپزی

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

## گفتار به متن

```javascript
const {stt} = require("majidapi/modules/ai");

// STT
stt({
    audioURL: "MP3 URL ..."
}).then(console.log);
```

## اطلاعات تاریخ تولد

```javascript
const {birthDate} = require("majidapi/modules/fun");

// BithDate Info
birthDate({
    year: "1380",
    month: "01",
    day: "01"
}).then(console.log);
```

## فیسبوک

```javascript
const {facebook} = require("majidapi/modules/social");

// Download video
facebook({
    url: "The facebook video url"
}).then(console.log);
```

## فوتبال360

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

## فونت

```javascript
const {font} = require("majidapi/modules/fun");

// Font
font({
    lang: "en", // en | fa
    text: "MajidAPI"
}).then(console.log);
```

## اطلاعات عمومی

```javascript
const {generalInformation} = require("majidapi/modules/fun");

// General Information
generalInformation().then(console.log);
```

## تبدیل پینگلیش به فارسی

```javascript
const {pinglish2farsi} = require("majidapi/modules/tools");

//  Pinglish To Farsi
pinglish2farsi({
    text: "Salam khoobi?"
}).then(console.log);
```

## فوتبالی

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

## حذف پس زمینه عکس

```javascript
const {removeBackground} = require("majidapi/modules/image");

// Remove Background
removeBackground({
    imageURL: "The photo url",
    out: "rm-bg.jpg"
}).then(console.log);
```

## حدیث

```javascript
const {hadith} = require("majidapi/modules/fun");

// Hadith
hadith().then(console.log);
```

## سخن بزرگان

```javascript
const {sokhan} = require("majidapi/modules/fun");

// Sokhan Bozorgan
sokhan().then(console.log);
```

## پ ن پ

```javascript
const {panapa} = require("majidapi/modules/fun");

// Pa Na Pa
panapa().then(console.log);
```

## بیو

```javascript
const {bio} = require("majidapi/modules/fun");

// Bio Farsi
bio().then(console.log);
```