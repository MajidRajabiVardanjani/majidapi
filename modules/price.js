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
    car: ({method = "list", id = "", newsId = "", page = 1}) => {
        return new Promise(resolve => {
            axios.get(`${config.api}/price/car?action=${method}&id=${id}&newsId=${newsId}&page=${page}`)
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
    },
    nobitex: ({
                  method = "currency",
                  currency = "",
                  symbol = "BTCIRT",
                  minutes = 60,
                  resolution = 60,
                  countBack = 100
              }) => {

        let furl = `${config.api}/price/nobitex`;

        if (method === "chart") {
            furl = `${furl}/chart?symbol=${symbol}&minutes=${minutes}&resolution=${resolution}&countBack=${countBack}`
        } else {
            furl = `${furl}?currency=${currency}`;
        }
        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        })
    }
}