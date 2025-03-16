const config = require("./config");
const axios = require("axios");

module.exports = {
    football360: ({method = "competitions", page = 1, id = "",}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/football360?action=${method}&page=${page}&id=${id}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}