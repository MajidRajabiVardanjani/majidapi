const config = require("./config");
const axios = require("axios");

module.exports = {
    tts: ({gender = "woman", text = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/tts?gender=${gender}&text=${text}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}