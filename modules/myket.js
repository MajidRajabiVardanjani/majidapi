const config = require("./config");
const axios = require("axios");

module.exports = {
    myket: ({method = "search", search = "", packageName = "", page = 1}) => {
        let url = `${config.api}/myket/search?s=${encodeURI(search)}&page=${page}`;
        if (method === "info") {
            url = `${config.api}/myket/info?packageName=${packageName}`;
        }
        return new Promise(resolve => {
            axios.get(url)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}