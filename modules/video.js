const config = require("./config");
const axios = require("axios");

module.exports = {
    aparat: ({method = "home", page = 1, catid = "", search = "", uid = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/aparat?action=${method}&page=${page}&catid=${catid}&s=${encodeURI(search)}&uid=${uid}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}