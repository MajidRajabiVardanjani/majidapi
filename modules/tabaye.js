const config = require("./config");
const axios = require("axios");

module.exports = {
    tabaye: ({
                 method = "categories",
                 page = 1,
                 id = "",
                 mezaj = "دموی",
                 search = ""
             }) => {
        return new Promise(resolve => {
            axios.get(`https://api.majidapi.ir/tabaye?action=${method}&page=${page}&id=${id}&m=${encodeURI(mezaj)}&s=${encodeURI(search)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}