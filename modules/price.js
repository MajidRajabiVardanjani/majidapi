const config = require("./config");
const axios = require("axios");

module.exports = {
    bonbast: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/bonbast`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    gold: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/gold`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    mobile: ({model = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/mobile?model?=${model}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    car: ({method = "list", id = ""}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/car?action=${method}&id=${id}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    },
    bitpin: () => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/bitpin`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}