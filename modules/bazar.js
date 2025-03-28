const config = require("./config");
const axios = require("axios");

module.exports = {
    bazar: ({method = "search", search = "", packageName = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/bazar?action=${method}&s=${encodeURI(search)}&packageName=${packageName}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}