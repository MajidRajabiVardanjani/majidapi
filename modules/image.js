const config = require("./config");

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
    }
}
