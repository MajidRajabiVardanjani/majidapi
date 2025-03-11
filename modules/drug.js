const config = require("./config");
const axios = require("axios");

module.exports = {
    darooyab: ({method = "search", search = "", url = ""}) => {
        let furl = `${config.api}/darooyab/search?search=${encodeURI(search)}`;
        if (method !== "search") {
            furl = `${config.api}/darooyab/info?url=${url}`;
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