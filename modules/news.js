const config = require("./config");
const axios = require("axios");


module.exports = {
    akharinKhabar: ({
                        method = "",
                        categoryId = "",
                        page = 1,
                        newsId = ""
                    }) => {

        return new Promise(resolve => {
            axios.get(`${config.api}/news/akharinkhabar?action=${method}&newsid=${newsId}&catid=${categoryId}&page=${page}`)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    },
    crypto: ({method = "list", page = 1, link = ""}) => {
        let furl = `${config.api}/news/crypto`;
        if (method === "list") {
            furl = `${furl}/list?page=${page}`;
        } else {
            furl = `${furl}/info?link=${link}`;
        }

        return new Promise(resolve => {
            axios.get(furl)
                .then(r => {
                    config.success(resolve, r);
                })
                .catch(err => {
                    config.error(resolve, err);
                });
        });
    }
}