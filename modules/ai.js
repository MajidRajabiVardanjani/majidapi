const config = require("./config");
const axios = require("axios");

module.exports = {
    gpt: ({question = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/gpt/3?q=${encodeURI(question)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    image: ({prompt = "a cute cat"}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ai/image?prompt=${encodeURI(prompt)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}