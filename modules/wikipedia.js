const config = require("./config");
const axios = require("axios");

module.exports = {
    wikipedia: ({action = "featured", search="", page=1,title=""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/wikipedia?action=${action}&s=${search}&page=${page}&title=${title}`)
            .then(r => {
                config.success(resolve, r);
            })
            .catch(err => {
                config.error(resolve, err)
            });
        })
    }
}