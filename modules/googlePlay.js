const config = require("./config");
const axios = require("axios");

module.exports = {
    googlePlay: ({method = "search", search = "", url = ""}) => {
        let furl = `${config.api}/googleplay/search?s=${encodeURI(search)}`;
        if (method === "download") {
            furl = `${config.api}/googleplay/download?url=${url}`;
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