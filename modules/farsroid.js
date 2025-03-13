const config = require("./config");
const axios = require("axios");

module.exports = {
    farsroid: ({method = "search", search = "", page = 1, url = ""}) => {
        let furl = `${config.api}/farsroid/search?s=${encodeURI(search)}&page=${page}`;
        if (method !== "search") {
            furl = `${config.api}/farsroid/download?url=${url}`;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}