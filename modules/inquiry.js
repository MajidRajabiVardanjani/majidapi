const config = require("./config");
const axios = require("axios");

module.exports = {

    numberBook: ({phoneNumber = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config}/inquiry/numberbook?phone=${phoneNumber}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    card: ({cardNumber = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config}/inquiry/card?card=${cardNumber}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    sheba: ({sheba = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config}/inquiry/card?shba=${sheba}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    enamad: ({domain = "digikala.com"}) => {
        return new Promise(resolve => {
            axios.get(`${config}/inquiry/enamad?domain=${domain}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },

    shekar: ({id = "", phone = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/inquiry/shekar?phone=${phone}&id=${id}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    }

}