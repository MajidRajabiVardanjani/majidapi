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
    }
}