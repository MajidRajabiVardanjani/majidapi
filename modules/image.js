const config = require("./config");
const axios = require("axios");

module.exports = {
    ePhoto: ({text = ""}) => {
        return new Promise(resolve => {
            config.downloadFile(`${config.api}/image/logo?text=${encodeURI(text)}`, "logo.jpg")
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    }
}