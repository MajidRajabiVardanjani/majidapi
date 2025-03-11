const config = require("./config");
const axios = require("axios");

module.exports = {
    dehkhoda: ({word = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/dictionary/dehkhoda?word=${encodeURI(word)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    names: ({name = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/dictionary/names?name=${encodeURI(name)}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}