const config = require("./config");
const axios = require("axios");

module.exports = {
    gpt: ({model = "3", question = ""}) => {
        let url = `${config.api}/gpt/3?q=${encodeURI(question)}`;
        switch (model) {
            case "evil":
                url = `${config.api}/gpt/evil?q=${encodeURI(question)}`
                break;
            case "3.5":
                url = `${config.api}/gpt/35?q=${encodeURI(question)}`
                break;
            default:
                url = `${config.api}/gpt/3?q=${encodeURI(question)}`;
                break;
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
    },
    stt: ({audioURL = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/ai/stt?url=${audioURL}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}