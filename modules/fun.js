const config = require("./config");
const axios = require("axios");

module.exports = {
    fal: ({type = "text"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/fal?type=${type}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    joke: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/fun/joke`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}