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
    },

    dateTime: ({timeZone = "Asia/Tehran"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/datetime?timeZone=${timeZone}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    pinglish2farsi: ({text = "salam"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/pinglish2farsi?text=${text}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    proxyList: ({protocol = "socks5"}) => {
        return new Promise(resolve => {
            axios.get(`https://api.majidapi.ir/tools/proxy?protocol=${protocol}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    screenShot: ({type = "photo", url = "", width = 1280, height = 2000, out = "shot.jpg"}) => {
        let furl = `${config.api}/tools/screenshot?url=${encodeURI(url)}&width=${width}&height=${height}`;

        return new Promise(resolve => {
            if (type === "photo") {
                config.downloadFile(furl, out)
                    .then(r => {
                        resolve(r);
                    })
                    .catch(err => {
                        config.error(resolve, err);
                    });
            } else {
                axios.get(`${furl}&type=url`)
                    .then(r => {
                        config.success(resolve, r);
                    })
                    .catch(err => {
                        config.error(resolve, err);
                    });
            }

        })
    },

    nationalCode: ({code = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/nationalcode?code=${code}`)
                .then(r => {
                    config.success(resolve, r)
                })
                .catch(err => {
                    config.error(resolve, err)
                });
        })
    },

    owghat: ({city = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/owghat?city=${city}`)
                .then(r => {
                    config.success(resolve, r)
                })
                .catch(err => {
                    config.error(resolve, err)
                });
        })
    },

    smsBomber: ({phone = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/smsbomber?phone=${phone}`)
                .then(r => {
                    config.success(resolve, r)
                })
                .catch(err => {
                    config.error(resolve, err)
                });
        })
    },
    pelakYab: ({method = "city", city = "تهران", num = 10}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tools/pelakyab?action=${method}&city=${city}&num=${num}`)
                .then(r => {
                    config.success(resolve, r)
                })
                .catch(err => {
                    config.error(resolve, err)
                });
        })
    }
}
