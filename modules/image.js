const config = require("./config");
const axios = require("axios");

module.exports = {
    ePhoto: ({text = "", out = "logo.jpg"}) => {
        return new Promise(resolve => {
            config.downloadFile(`${config.api}/image/logo?text=${encodeURI(text)}`, out)
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    },

    removeBackground: ({imageURL = "", out = ""}) => {
        return new Promise(resolve => {
            config.downloadFile(`${config.api}/image/remove-background?url=${imageURL}`, out)
                .then(r => {
                    resolve(r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    blurBackground: ({imageURL = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/image/bg-blur?url=${imageURL}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}
