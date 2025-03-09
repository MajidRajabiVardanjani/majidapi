const config = require("./config");
const axios = require("axios");

module.exports = {
    tts: ({gender = "woman", text = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tts?gender=${gender}&text=${text}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    tempMail: ({method = "new", email = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/tempmail?action=${method}&email=${email}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(err);
                });
        })
    },
    qrcode: ({text = "", size = 512, out = "qrcode.png"}) => {
        return new Promise(resolve => {
            config.downloadFile(`${config.api}/tools/qrcode?text=${encodeURI(text)}&size=${size}`, out)
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    googleTranslate: ({text = "", to = "en"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/translate?q=${encodeURI(text)}&to=${to}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    weather: ({city = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/weather?city=${encodeURI(city)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    captcha: ({length = 10}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/captcha?length=${length}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}