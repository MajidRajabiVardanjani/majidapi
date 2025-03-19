const config = require("./config");
const axios = require("axios");

module.exports = {
    fal: ({type = "text"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/fal?type=${type}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    joke: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/joke`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    estekhareh: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/estekhareh`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    tabirKhab: ({word = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/khab?name=${encodeURI(word)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    cooking: ({method = "home", page = 1, search = "", url = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/cooking?action=${method}&page=${page}&s=${encodeURI(search)}&url=${url}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    birthDate: ({year = "1380", month = "01", day = "01"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/birthdate?year=${year}&month=${month}&day=${day}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    font: (lang = "en", text = "MajidAPI") => {
        let url = `${config.api}/fun/font`;
        if (lang === "en") {
            url = `${url}/en`;
        } else {
            url = `${url}/fa`;
        }
        url = `${url}?text=${text}`;

        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    generalInformation: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/general-information`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    hadith: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/hadith`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    sokhan: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/sokhan`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    panapa: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/panapa`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    bio: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/bio`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    divanHafez: ({search = "", no = 1}) => {
        let url = `${config.api}/fun/divan-hafez`;

        if (search !== "") {
            url = `${url}?s=${encodeURI(search)}`;
        } else {
            url = `${url}?no=${no}`;
        }
        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(err);
                });
        })
    },

    story: () => {
        return new Promise(resolve => {
            axios.get(`https://api.majidapi.ir/fun/dastan`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }

}