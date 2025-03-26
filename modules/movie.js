const config = require("./config");
const axios = require("axios");

module.exports = {
    filmRail: ({method = "home", page = 1, movieId = "", search = "", type = "movies"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/movie/filmrail?action=${method}&id=${movieId}&page=${page}&s=${encodeURI(search)}&type=${type}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}