const config = require("./config");
const axios = require("axios");

module.exports = {
    gpt: ({model = "3", question = ""}) => {
        let url = `${config.api}/gpt/3?q=${encodeURI(question)}`;
        if (model !== "3") {
            url = `${config.api}/gpt/35?q=${encodeURI(question)}`
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